import React, { useRef, useEffect } from 'react';
import '../App.css'; // Your custom CSS file

function FloatingContainer() {
  const containerRef = useRef(null);

  useEffect(() => {
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
      {/* Your content for the floating container */}
      <p>This is the content of the floating container.</p>
    </div>
  );
}

export default FloatingContainer;
