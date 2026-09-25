import React from 'react';
import { useInView } from '../../hooks/useAnimations';
import './Intro.css';

const Intro: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="section intro-section">
      <div 
        ref={ref as React.RefObject<HTMLDivElement>} 
        className={`container intro-container ${inView ? 'is-visible' : ''}`}
      >
        <h2 className="section-heading">Every critical asset tells a story.</h2>
        <p className="section-copy">
          Electrical assets continuously generate signals. The challenge is turning those signals into useful intelligence.
        </p>
        
        <div className="intro-transition">
          <div className="transition-step">
            <span className="tech-label">ASSET</span>
            <div className="line-with-dot"></div>
          </div>
          <div className="transition-step">
            <span className="tech-label">SIGNAL</span>
            <div className="line-with-dot"></div>
          </div>
          <div className="transition-step">
            <span className="tech-label">INTELLIGENCE</span>
            <div className="line-with-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
