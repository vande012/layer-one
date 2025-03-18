'use client';

import { useEffect, useState } from 'react';

const codeLines = [
    "// Secure your business data",
    "setupFirewall(); enableEncryption();",
    "// Boost your online presence",
    "optimizeSEO(); trackAnalytics();",
    "// Protect against cyber threats",
    "installAntivirus(); updateSoftware();",
    "// Streamline operations",
    "automateBackups(); syncInventory();",
    "// Enhance customer experience",
    "improveWebsiteSpeed(); mobileOptimize();",
    "// Grow your business",
    "launchEcommerce(); integratePayment();"
];

const Terminal = () => {
    const [lines, setLines] = useState<string[]>(['']);
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 530);

        let currentLines: string[] = [];
        let currentLineIndex = 0;
        let charIndex = 0;

        const typeNextChar = () => {
            if (currentLineIndex >= codeLines.length) {
                currentLineIndex = 0;
                currentLines = [];
                setLines([]);
                setTimeout(typeNextChar, 1000);
                return;
            }

            const currentText = codeLines[currentLineIndex] || '';
            
            if (charIndex <= currentText.length) {
                currentLines[currentLineIndex] = currentText.slice(0, charIndex);
                setLines([...currentLines]);
                charIndex++;
                setTimeout(typeNextChar, 50);
            } else {
                charIndex = 0;
                currentLineIndex++;
                if (currentLines.length < 2) {
                    setTimeout(typeNextChar, 500);
                } else {
                    currentLines.shift();
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
        <div className="font-mono text-base leading-relaxed tracking-wide p-6 bg-black/20 rounded-lg">
            {lines.map((line, i) => {
                // Add safety check for line
                if (!line) return null;
                
                return (
                    <div 
                        key={i}
                        className={`${
                            line.startsWith('//') ? 'text-gray-400 italic' : 'text-[#eb6a1e]'
                        } opacity-80 hover:opacity-100 transition-opacity duration-300`}
                    >
                        {line}
                        {i === lines.length - 1 && (
                            <span 
                                className={`inline-block w-2 h-4 bg-[#eb6a1e] ml-1 ${
                                    cursorVisible ? 'opacity-80' : 'opacity-0'
                                }`}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Terminal;