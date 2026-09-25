import React, { useState } from 'react';
import { useInView, usePrefersReducedMotion } from '../../hooks/useAnimations';
import './IndustrySelector.css';
import { industries } from '../../data/assets';

export default function IndustrySelector() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  return (
    <section className="industry-selector" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <header className={`industry-header ${isInView && !prefersReducedMotion ? 'animate-fade-in' : ''}`}>
          <h2 className="heading-secondary">Designed for critical environments.</h2>
        </header>

        <div className={`industry-interactive ${isInView && !prefersReducedMotion ? 'animate-fade-in' : ''}`}>
          <div className="industry-tabs">
            {industries.map((ind, i) => (
              <button 
                key={ind.id}
                className={`industry-tab ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-selected={i === activeIndex}
              >
                {ind.name}
              </button>
            ))}
          </div>

          <div className="industry-content">
            <div className="industry-info">
              <h3 className="industry-name">{activeIndustry.name}</h3>
              <p className="industry-desc">{activeIndustry.description}</p>
              
              <div className="industry-assets">
                <span className="assets-label">Relevant Assets:</span>
                <div className="asset-tags">
                  {activeIndustry.assets.map((asset: string) => (
                    <span key={asset} className="asset-tag">{asset}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="industry-visual">
              <svg viewBox="0 0 400 300" className="abstract-env-svg" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="var(--color-accent-dim)" stopOpacity="0.01" />
                  </linearGradient>
                </defs>
                <rect width="400" height="300" fill="url(#grid-grad)" />
                <path d="M 50,250 L 150,150 L 250,200 L 350,50" fill="none" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="150" cy="150" r="4" fill="var(--color-accent)" />
                <circle cx="250" cy="200" r="4" fill="var(--color-accent)" />
                <circle cx="350" cy="50" r="4" fill="var(--color-accent)" />
                <rect x="130" y="130" width="40" height="40" fill="none" stroke="var(--color-border)" strokeWidth="1" />
                <rect x="230" y="180" width="40" height="40" fill="none" stroke="var(--color-border)" strokeWidth="1" />
                <rect x="330" y="30" width="40" height="40" fill="none" stroke="var(--color-border)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
