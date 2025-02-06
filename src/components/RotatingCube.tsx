import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const RotatingCube: React.FC = () => {
  const controls = useAnimation();
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({
      rotateY: 360,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cubeRef.current) return;
    
    const rect = cubeRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    cubeRef.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const faces = [
    { transform: 'translateZ(50px)', background: 'rgba(79, 70, 229, 0.2)' },
    { transform: 'rotateY(180deg) translateZ(50px)', background: 'rgba(79, 70, 229, 0.2)' },
    { transform: 'rotateY(90deg) translateZ(50px)', background: 'rgba(79, 70, 229, 0.2)' },
    { transform: 'rotateY(-90deg) translateZ(50px)', background: 'rgba(79, 70, 229, 0.2)' },
    { transform: 'rotateX(90deg) translateZ(50px)', background: 'rgba(79, 70, 229, 0.2)' },
    { transform: 'rotateX(-90deg) translateZ(50px)', background: 'rgba(79, 70, 229, 0.2)' },
  ];

  return (
    <div 
      className="w-32 h-32 relative perspective-1000"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        ref={cubeRef}
        className="w-full h-full relative transform-style-3d"
        animate={controls}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {faces.map((face, index) => (
          <div
            key={index}
            className="absolute w-full h-full border border-indigo-500/30 backdrop-blur-sm"
            style={{
              ...face,
              backfaceVisibility: 'visible',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default RotatingCube;
