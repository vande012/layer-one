'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const DotNetworkBackground = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const dotsRef = useRef([]);
  const linesRef = useRef([]);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const timeRef = useRef(0);
  const cameraAngleRef = useRef(0);
  const spikingDotsRef = useRef(new Set());
  const droppingDotsRef = useRef(new Set());

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x000000);

    // Initialize camera with perspective view
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.7,
      1200
    );
    cameraRef.current = camera;
    camera.position.set(0, 10, 40);
    camera.rotation.x = -Math.PI / 6;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create grid of dots
    const gridSize = 40;
    const spacing = 4;
    const dots = [];
    const dotGeometry = new THREE.SphereGeometry(0.08, 8, 8);
    const dotMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffff,
      transparent: true,
      opacity: 0.4
    });

    // Create dots in a grid pattern
    for (let z = 0; z < gridSize; z++) {
      for (let x = 0; x < gridSize; x++) {
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);
        
        const xPos = (x - gridSize/2) * spacing;
        const zPos = (z - gridSize/2) * spacing;
        const yPos = 0;
        
        dot.position.set(xPos, yPos, zPos);
        
        const distanceScale = 1 - (z / gridSize) * 0.5;
        dot.scale.set(distanceScale, distanceScale, distanceScale);
        
        dot.userData = {
          originalPosition: dot.position.clone(),
          phaseOffset: Math.random() * Math.PI * 2,
          amplitude: 0.15 + Math.random() * 0.1,
          frequency: 0.3 + Math.random() * 0.2,
          depth: z / gridSize,
          spiking: true,
          dropping: true,
          spikeProgress: 0,
          dropProgress: 0,
          spikeHeight: 3 + Math.random() * 2,
          dropDepth: -(3 + Math.random())
        };
        scene.add(dot);
        dots.push(dot);
      }
    }
    dotsRef.current = dots;

    // Create lines with enhanced visibility
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0xeb6a1e,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      linewidth: 1.5
    });

    const lines = [];
    const connectDistance = spacing * 2;
    
    for (let i = 0; i < dots.length; i++) {
      const z = Math.floor(i / gridSize);
      const x = i % gridSize;
      
      const neighbors = [
        [x+1, z],
        [x, z+1],
        [x+1, z+1],
        [x-1, z+1]
      ];
      
      for (const [nx, nz] of neighbors) {
        if (nx >= 0 && nx < gridSize && nz >= 0 && nz < gridSize) {
          const neighborIndex = nz * gridSize + nx;
          
          const lineGeometry = new THREE.BufferGeometry();
          const vertices = new Float32Array(6);
          lineGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
          const line = new THREE.Line(lineGeometry, lineMaterial);
          scene.add(line);
          lines.push({
            line,
            pointA: i,
            pointB: neighborIndex,
            depth: z / gridSize
          });
        }
      }
    }
    linesRef.current = lines;

    // Mouse movement handler
    const onMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Window resize handler
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Random animations
    const triggerRandomSpike = () => {
      const availableDots = dotsRef.current.filter(dot => !dot.userData.spiking && !dot.userData.dropping);
      if (availableDots.length > 0) {
        const randomDot = availableDots[Math.floor(Math.random() * availableDots.length)];
        randomDot.userData.spiking = true;
        randomDot.userData.spikeProgress = 0;
        spikingDotsRef.current.add(randomDot);
      }
    };

    const triggerRandomDrop = () => {
      const availableDots = dotsRef.current.filter(dot => !dot.userData.spiking && !dot.userData.dropping);
      if (availableDots.length > 0) {
        const randomDot = availableDots[Math.floor(Math.random() * availableDots.length)];
        randomDot.userData.dropping = true;
        randomDot.userData.dropProgress = 0;
        droppingDotsRef.current.add(randomDot);
      }
    };

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      timeRef.current += 0.12;
    
       // Add camera rotation
  cameraAngleRef.current += 0.001; // Adjust speed here
  const radius = 40; // Match this to your initial camera distance
  const height = 10; // Match this to your initial camera height
  
  if (cameraRef.current) {
    cameraRef.current.position.x = Math.sin(cameraAngleRef.current) * radius;
    cameraRef.current.position.z = Math.cos(cameraAngleRef.current) * radius;
    cameraRef.current.position.y = height;
    
    // Make camera look at center
    cameraRef.current.lookAt(new THREE.Vector3(0, 0, 0));
  }
      // Trigger random animations
      if (Math.random() < 0.9) triggerRandomSpike();
      if (Math.random() < 0.9) triggerRandomDrop();

      // Update dots
      dotsRef.current.forEach((dot) => {
        const { 
          originalPosition, 
          phaseOffset, 
          amplitude, 
          frequency, 
          depth, 
          spiking,
          dropping,
          spikeHeight,
          dropDepth
        } = dot.userData;
        
        // Base wave motion
        const wave = Math.sin(timeRef.current * frequency + phaseOffset) * amplitude * (1 - depth * 0.5);
        let finalY = originalPosition.y + wave;
        
        // Handle spiking animation
        if (spiking) {
          dot.userData.spikeProgress += 0.015;
          if (dot.userData.spikeProgress >= 1) {
            dot.userData.spiking = false;
            spikingDotsRef.current.delete(dot);
          }
          const spikeCurve = Math.sin(dot.userData.spikeProgress * Math.PI) * spikeHeight;
          finalY += spikeCurve;
        }

        // Handle dropping animation
        if (dropping) {
          dot.userData.dropProgress += 0.015;
          if (dot.userData.dropProgress >= 1) {
            dot.userData.dropping = false;
            droppingDotsRef.current.delete(dot);
          }
          const dropCurve = Math.sin(dot.userData.dropProgress * Math.PI) * dropDepth;
          finalY += dropCurve;
        }

        dot.position.y = finalY;
        
        // Mouse interaction
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouseRef.current, camera);
        const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
        const intersection = new THREE.Vector3();
        raycaster.ray.intersectPlane(plane, intersection);
        
        const distanceToMouse = intersection.distanceTo(dot.position);
        const influenceRadius = 5 * (1 - depth * 0.5);
        
        if (distanceToMouse < influenceRadius) {
          // Instead of just moving the dot up, trigger spike or drop
          if (!dot.userData.spiking && !dot.userData.dropping) {
            const normalizedDistance = distanceToMouse / influenceRadius;
            
            if (normalizedDistance < 0.5) {
              dot.userData.spiking = true;
              dot.userData.spikeProgress = 0;
              spikingDotsRef.current.add(dot);
            } else {
              dot.userData.dropping = true;
              dot.userData.dropProgress = 0;
              droppingDotsRef.current.add(dot);
            }
          }
        }
      });

      // Update lines
      linesRef.current.forEach((connection) => {
        const pointA = dotsRef.current[connection.pointA].position;
        const pointB = dotsRef.current[connection.pointB].position;
        
        const distance = pointA.distanceTo(pointB);
        const maxDistance = connectDistance * (1 - connection.depth * 0.3);
        
        if (distance < maxDistance) {
          const opacity = (1 - (distance / maxDistance)) * (1 - connection.depth * 0.5);
          connection.line.material.opacity = opacity * 0.8;
          connection.line.visible = true;
          
          const positions = connection.line.geometry.attributes.position.array;
          positions[0] = pointA.x;
          positions[1] = pointA.y;
          positions[2] = pointA.z;
          positions[3] = pointB.x;
          positions[4] = pointB.y;
          positions[5] = pointB.z;
          connection.line.geometry.attributes.position.needsUpdate = true;
        } else {
          connection.line.visible = false;
        }
      });

      renderer.render(scene, camera);
    };

    // Add event listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      dotsRef.current.forEach(dot => {
        dot.geometry.dispose();
        dot.material.dispose();
      });
      
      linesRef.current.forEach(connection => {
        connection.line.geometry.dispose();
      });
      
      if (lineMaterial) lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#000'
      }}
    />
  );
};

export default DotNetworkBackground;