import React, { useRef } from 'react';
import { signalJourneyStages } from '../../data/assets';
import { useScrollProgress } from '../../hooks/useAnimations';
import './SignalJourney.css';

const SignalJourney: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(sectionRef);

  // Determine active index based on scroll (5 stages -> 0 to 4)
  const activeIndex = Math.min(
    signalJourneyStages.length - 1,
    Math.floor(scrollProgress * signalJourneyStages.length)
  );

  return (
    <section ref={sectionRef} className="section signal-section">
      <div className="container">
        <h2 className="section-heading text-center">From signal to decision.</h2>
        
        <div className="journey-container desktop-journey">
          <svg className="journey-path" preserveAspectRatio="none" viewBox="0 0 1000 100">
            <line x1="50" y1="50" x2="950" y2="50" className="path-bg" />
            <line 
              x1="50" y1="50" x2="950" y2="50" 
              className="path-fill" 
              strokeDasharray="900"
              strokeDashoffset={900 - scrollProgress * 900}
            />
          </svg>

          <div className="journey-nodes">
            {signalJourneyStages.map((stage, index) => {
              const isActive = index <= activeIndex;
              const isCurrent = index === activeIndex;
              
              return (
                <div key={stage.number} className={`journey-node ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
                  <div className="node-marker">
                    <div className="node-number">{stage.number}</div>
                  </div>
                  <div className="node-content">
                    <div className="node-label">{stage.label}</div>
                    <div className="node-sublabel">{stage.sublabel}</div>
                    <div className="node-desc">{stage.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="journey-container mobile-journey">
          <svg className="journey-path-vertical" preserveAspectRatio="none" viewBox="0 0 50 1000">
            <line x1="25" y1="0" x2="25" y2="1000" className="path-bg" />
            <line 
              x1="25" y1="0" x2="25" y2="1000" 
              className="path-fill" 
              strokeDasharray="1000"
              strokeDashoffset={1000 - scrollProgress * 1000}
            />
          </svg>

          <div className="journey-nodes-vertical">
            {signalJourneyStages.map((stage, index) => {
              const isActive = index <= activeIndex;
              const isCurrent = index === activeIndex;
              
              return (
                <div key={stage.number} className={`journey-node-vert ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
                  <div className="node-marker">
                    <div className="node-number">{stage.number}</div>
                  </div>
                  <div className="node-content">
                    <div className="node-label">{stage.label}</div>
                    <div className="node-sublabel">{stage.sublabel}</div>
                    <div className="node-desc">{stage.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignalJourney;
