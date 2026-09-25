import React from 'react';
import { technologyLayers } from '../../data/assets';
import { useInView } from '../../hooks/useAnimations';
import './TechnologyPipeline.css';

const TechnologyPipeline = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="pipeline-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="pipeline-container">
        <h2 className={`pipeline-heading ${inView ? 'is-visible' : ''}`}>
          From field signal to enterprise intelligence.
        </h2>

        <div className="pipeline-layout">
          <div className="pipeline-layers">
            {technologyLayers.map((layer, index) => (
              <div 
                key={layer.id} 
                className={`pipeline-layer ${inView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="layer-sublabel">{layer.sublabel}</div>
                <h3 className="layer-title">{layer.label}</h3>
                <p className="layer-description">{layer.description}</p>
                {index < technologyLayers.length - 1 && (
                  <div className="mobile-connector">
                    <svg viewBox="0 0 24 40" className="arrow-down">
                      <line x1="12" y1="0" x2="12" y2="38" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                      <path d="M6 32 L12 38 L18 32" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Visual Connector */}
          <div className={`pipeline-visual ${inView ? 'is-visible' : ''}`}>
            <svg className="connector-line" preserveAspectRatio="none" viewBox="0 0 100 400">
              <line x1="50" y1="20" x2="50" y2="380" className="main-path" />
              
              <circle cx="50" cy="50" r="6" className="node-point" />
              <text x="70" y="55" className="node-label">ASSET → SENSOR</text>

              <path d="M45 195 L50 205 L55 195 Z" className="arrow-head" />
              <circle cx="50" cy="200" r="6" className="node-point" />
              <text x="70" y="205" className="node-label">EDGE → ACQUISITION</text>

              <path d="M45 345 L50 355 L55 345 Z" className="arrow-head" />
              <circle cx="50" cy="350" r="6" className="node-point" />
              <text x="70" y="355" className="node-label">RM EYE → ANALYTICS</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPipeline;
