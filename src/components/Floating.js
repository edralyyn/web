//Floating.js

import React, { useRef, useEffect, useState } from 'react';
import { handleCollect } from './Collect.js';
import '../App.css';

function FloatingContainer() {
  const containerRef = useRef(null);
  const [output, setOutput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleCollect();
        setOutput(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();

    const container = containerRef.current;
    let isDragging = false;
    let initialX;
    let initialY;

    const handleMouseDown = (event) => {
      isDragging = true;
      const rect = container.getBoundingClientRect();
      initialX = event.clientX - rect.left;
      initialY = event.clientY - rect.top;
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;

      const newX = event.clientX - initialX;
      const newY = event.clientY - initialY;

      const rect = container.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const maxX = viewportWidth - rect.width;
      const maxY = viewportHeight - rect.height;

      const boundedX = Math.min(Math.max(newX, 0), maxX);
      const boundedY = Math.min(Math.max(newY, 0), maxY);

      container.style.left = boundedX + 'px';
      container.style.top = boundedY + 'px';
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div ref={containerRef} className="floating-container rounded-2">
      <h5>Topology Table</h5>
      <div className="floating-container-body">
        <p>{output}</p>
      </div>
    </div>
  );
}

export default FloatingContainer;
