"use client"
import React, { useState, useEffect } from 'react';

const CursorTest = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if the cursor is over a clickable element
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a'
      );
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden cursor-none">
      {/* Custom cursor */}
      <div
        className={`fixed pointer-events-none transition-transform duration-100 ease-out cursor-none
          ${isPointer ? 'scale-150' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <div className="relative">
          <div className="absolute bg-blue-500 rounded-full w-4 h-4 -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
          <div className="absolute bg-blue-300 rounded-full w-8 h-8 -translate-x-1/2 -translate-y-1/2 animate-pulse opacity-20" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 cursor-none">
        <h1 className="text-4xl font-bold text-white mb-8 cursor-none">Cursor Test Page</h1>
        
        <div className="grid gap-6">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors w-fit cursor-none">
            Hover me!
          </button>
          
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors w-fit cursor-none">
            Click me!
          </a>
          
          <p className="text-gray-300 max-w-2xl cursor-none">
            Move your cursor around this page to see the custom cursor effect. 
            Notice how the cursor changes when hovering over clickable elements like 
            buttons and links. The cursor uses a mix-blend-difference effect to ensure 
            visibility across different background colors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CursorTest; 