import React from 'react';
import { useInView, usePrefersReducedMotion } from '../../hooks/useAnimations';
import './MaintenanceJourney.css';
import { maintenanceLevels } from '../../data/assets';

export default function MaintenanceJourney() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const prefersReducedMotion = usePrefersReducedMotion();

  const stageStyles = ['dimmed', 'medium', 'highlight'];

  return (
    <section className="maintenance-journey" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <header className={`journey-header ${isInView && !prefersReducedMotion ? 'animate-fade-in' : ''}`}>
          <h2 className="heading-secondary">Make every maintenance decision count.</h2>
        </header>

        <div className="journey-stages">
          {maintenanceLevels.map((level, index) => (
            <React.Fragment key={level.id}>
              <div 
                className={`journey-stage stage-${stageStyles[index] || 'dimmed'} ${isInView && !prefersReducedMotion ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="stage-card">
                  <h3 className="stage-title">{level.label}</h3>
                  <p className="stage-description">{level.description}</p>
                </div>
              </div>
              
              {index < maintenanceLevels.length - 1 && (
                <div className="journey-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
