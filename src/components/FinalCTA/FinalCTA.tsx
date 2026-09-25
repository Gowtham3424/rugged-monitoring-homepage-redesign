import React from 'react';
import { useInView, usePrefersReducedMotion } from '../../hooks/useAnimations';
import './FinalCTA.css';

export default function FinalCTA() {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="final-cta" ref={ref as React.RefObject<HTMLElement>}>
      <div className="cta-bg-visual" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <g className="signal-paths" stroke="var(--color-accent)" fill="none" opacity="0.06">
            <path d="M0,50 L300,50 L350,30 L650,30 L700,70 L1200,70" strokeWidth="1" />
            <path d="M0,150 L200,150 L250,120 L550,120 L600,170 L1200,170" strokeWidth="1" />
            <path d="M0,250 L400,250 L450,280 L750,280 L800,220 L1200,220" strokeWidth="1" />
            
            <circle cx="300" cy="50" r="3" fill="var(--color-accent)" />
            <circle cx="650" cy="30" r="3" fill="var(--color-accent)" />
            <circle cx="200" cy="150" r="3" fill="var(--color-accent)" />
            <circle cx="550" cy="120" r="3" fill="var(--color-accent)" />
            <circle cx="400" cy="250" r="3" fill="var(--color-accent)" />
            <circle cx="750" cy="280" r="3" fill="var(--color-accent)" />
          </g>
        </svg>
      </div>

      <div className="container">
        <div className={`cta-content ${isInView && !prefersReducedMotion ? 'animate-slide-up' : ''}`}>
          <h2 className="cta-heading">
            <span className="line-1">Your assets are already generating signals.</span>
            <span className="line-2">Turn them into intelligence.</span>
          </h2>
          
          <div className="cta-actions">
            <a href="#solutions" className="btn btn--primary">Explore Solutions</a>
            <a href="#contact" className="btn btn--outline">Talk to an Expert &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
