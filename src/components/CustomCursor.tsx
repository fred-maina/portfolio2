import React, { useRef, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveCursor);

    const hideCursor = () => {
        if (cursorRef.current) cursorRef.current.style.opacity = '0';
    }
    const showCursor = () => {
        if (cursorRef.current) cursorRef.current.style.opacity = '1';
    }
    document.body.addEventListener('mouseleave', hideCursor);
    document.body.addEventListener('mouseenter', showCursor);

    return () => {
        window.removeEventListener('mousemove', moveCursor);
        document.body.removeEventListener('mouseleave', hideCursor);
        document.body.removeEventListener('mouseenter', showCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
    ></div>
  );
};

export default CustomCursor;