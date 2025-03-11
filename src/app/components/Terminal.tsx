'use client';

import { useEffect, useState } from 'react';

const codeLines = [
    "function init() { return true; }",
    "const data = fetch(api);",
    "for (let i = 0; i < 10; i++) {",
    "var system = boot();",
    "if (error) throw new Error();",
    "let config = load(settings);",
    "async function deploy() {",
    "const result = process(input);",
    "while (active) update();",
    "function sync(data) { return; }"
];

const Terminal = () => {
    const [lines, setLines] = useState<string[]>(['']);
    const [cursorVisible, setCursorVisible] = useState(true);

    const shuffleArray = (array: string[]) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 530);

        let currentLines: string[] = [];
        let currentLineIndex = 0;
        let charIndex = 0;
        let shuffledLines = shuffleArray(codeLines);

        const typeNextChar = () => {
            if (currentLineIndex >= shuffledLines.length) {
                currentLineIndex = 0;
                shuffledLines = shuffleArray(codeLines);
                currentLines = [];
                setLines([]);
                setTimeout(typeNextChar, 1000);
                return;
            }

            const currentText = shuffledLines[currentLineIndex];
            
            if (charIndex <= currentText.length) {
                currentLines[currentLineIndex] = currentText.slice(0, charIndex);
                setLines([...currentLines]);
                charIndex++;
                setTimeout(typeNextChar, 50);
            } else {
                charIndex = 0;
                currentLineIndex++;
                if (currentLines.length < 3) { // Show only 3 lines at a time
                    setTimeout(typeNextChar, 500);
                } else {
                    currentLines.shift(); // Remove first line
                    setTimeout(typeNextChar, 500);
                }
            }
        };

        typeNextChar();

        return () => {
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <div className="font-mono text-base leading-relaxed tracking-wide p-8">
            {lines.map((line, i) => (
                <div 
                    key={i} 
                    className="text-[#eb6a1e] opacity-80 hover:opacity-100 transition-opacity"
                    style={{
                        textShadow: '0 0 10px rgba(235, 106, 30, 0.3)'
                    }}
                >
                    {line}
                    {i === lines.length - 1 && (
                        <span 
                            className={`inline-block w-2 h-4 bg-[#eb6a1e] ml-1 ${
                                cursorVisible ? 'opacity-80' : 'opacity-0'
                            }`}
                            style={{
                                boxShadow: '0 0 10px rgba(235, 106, 30, 0.5)'
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Terminal;