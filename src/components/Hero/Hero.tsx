import React from 'react';
import { usePrefersReducedMotion } from '../../hooks/useAnimations';
import './Hero.css';

const Hero: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow eyebrow">ELECTRICAL ASSET INTELLIGENCE</span>
          <h1 className="hero__headline">
            Know the health of your<br />
            <span className="hero__headline-accent">electrical assets.</span>
          </h1>
          <p className="hero__support">
            Continuous condition monitoring and intelligent asset performance management for critical electrical infrastructure.
          </p>
          <div className="hero__actions">
            <a href="/solutions" className="btn btn--primary">
              Explore Solutions
            </a>
            <a href="/contact" className="btn btn--outline">
              Talk to an Expert &rarr;
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--rm-eye">
            <div className="hero__card-eyebrow">RM EYE / ASSET HEALTH</div>
            <div className="hero__card-value">94%</div>
            <div className="hero__card-status">
              <span className="status-dot status-dot--normal"></span>
              SYSTEM NORMAL
            </div>
          </div>
          
          <div className="hero__svg-wrapper">
            <svg viewBox="0 0 400 400" className="transformer-svg" xmlns="http://www.w3.org/2000/svg">
              {/* Lines linking to labels */}
              <path d="M 240 120 L 320 80" className="svg-connector" />
              <path d="M 280 200 L 340 200" className="svg-connector" />
              <path d="M 240 280 L 320 320" className="svg-connector" />
              <path d="M 160 120 L 80 80" className="svg-connector svg-connector--optional" />
              <path d="M 120 280 L 80 320" className="svg-connector svg-connector--optional" />

              {/* Data Labels */}
              <g className="svg-label" transform="translate(325, 75)">
                <text className="label-title">TEMP / 68°C</text>
              </g>
              <g className="svg-label" transform="translate(345, 205)">
                <text className="label-title">LOAD / 73%</text>
              </g>
              <g className="svg-label" transform="translate(325, 335)">
                <text className="label-title">HEALTH / 94%</text>
              </g>
              <g className="svg-label svg-label--optional" transform="translate(5, 75)">
                <text className="label-title">SIGNAL / STABLE</text>
              </g>
              <g className="svg-label svg-label--optional" transform="translate(5, 335)">
                <text className="label-title">ASSET / TR-042</text>
              </g>

              {/* Transformer Body */}
              <rect x="140" y="140" width="120" height="150" rx="8" className="svg-tank" />
              
              {/* Radiator Fins */}
              <g className="svg-fins">
                <line x1="120" y1="160" x2="140" y2="160" />
                <line x1="120" y1="180" x2="140" y2="180" />
                <line x1="120" y1="200" x2="140" y2="200" />
                <line x1="120" y1="220" x2="140" y2="220" />
                <line x1="120" y1="240" x2="140" y2="240" />
                
                <line x1="260" y1="160" x2="280" y2="160" />
                <line x1="260" y1="180" x2="280" y2="180" />
                <line x1="260" y1="200" x2="280" y2="200" />
                <line x1="260" y1="220" x2="280" y2="220" />
                <line x1="260" y1="240" x2="280" y2="240" />
              </g>
              
              <line x1="110" y1="150" x2="110" y2="250" className="svg-fin-bar" />
              <line x1="290" y1="150" x2="290" y2="250" className="svg-fin-bar" />

              {/* HV Bushings */}
              <g className="svg-bushings">
                <line x1="160" y1="80" x2="160" y2="140" />
                <line x1="155" y1="90" x2="165" y2="90" />
                <line x1="155" y1="105" x2="165" y2="105" />
                
                <line x1="200" y1="80" x2="200" y2="140" />
                <line x1="195" y1="90" x2="205" y2="90" />
                <line x1="195" y1="105" x2="205" y2="105" />
                
                <line x1="240" y1="80" x2="240" y2="140" />
                <line x1="235" y1="90" x2="245" y2="90" />
                <line x1="235" y1="105" x2="245" y2="105" />
              </g>

              {/* LV Bushings */}
              <g className="svg-bushings">
                <circle cx="100" cy="280" r="15" />
                <circle cx="300" cy="280" r="15" />
              </g>

              {/* Structural Lines */}
              <line x1="150" y1="150" x2="250" y2="150" className="svg-structure" />
              <line x1="150" y1="280" x2="250" y2="280" className="svg-structure" />

              {/* Sensor Points */}
              <g className="svg-sensors">
                <circle cx="200" cy="215" r="4" />
                <circle cx="170" cy="245" r="4" />
                <circle cx="230" cy="245" r="4" />
                <circle cx="200" cy="170" r="4" />
              </g>

              {/* Animated Pulses */}
              {!prefersReducedMotion && (
                <g className="svg-pulses">
                  <circle cx="200" cy="215" r="2" className="pulse pulse-1" />
                  <circle cx="170" cy="245" r="2" className="pulse pulse-2" />
                  <circle cx="230" cy="245" r="2" className="pulse pulse-3" />
                </g>
              )}
            </svg>
          </div>
        </div>
      </div>

      <div className="hero__divider">
        <span className="hero__divider-text">ASSET / SIGNAL</span>
        <span className="hero__divider-dot"></span>
        <span className="hero__divider-text">DATA / INTELLIGENCE</span>
      </div>
    </section>
  );
};

export default Hero;
