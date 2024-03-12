//Floating.js

import React, { useRef, useEffect, useState } from 'react';
import { handleCollect } from './Collect.js';
import '../App.css';

function FloatingContainer({ isCollectClicked }) {
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

    if (isCollectClicked) {
      fetchData();
    }
  }, [isCollectClicked]);

  return (
    <div ref={containerRef} className="floating-container rounded-2">
      <h5>Topology Table</h5>
      <div className="floating-container-body">
        {output && <p>{output}</p>}
      </div>
    </div>
  );
}

export default FloatingContainer;
