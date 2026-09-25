import React from 'react';
import { useInView, usePrefersReducedMotion } from '../../hooks/useAnimations';
import './CaseStudy.css';

export default function CaseStudy() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const prefersReducedMotion = usePrefersReducedMotion();

  const steps = [
    { label: 'CHALLENGE', desc: 'Critical assets generating unmonitored signals across distributed infrastructure.' },
    { label: 'MONITORING', desc: 'IIoT sensors and edge devices deployed for continuous condition data capture.' },
    { label: 'RM EYE', desc: 'Centralized asset intelligence providing real-time health visibility.' },
    { label: 'INSIGHT', desc: 'Actionable maintenance intelligence enabling informed decisions.' }
  ];

  return (
    <section className="case-study" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <header className={`case-header ${isInView && !prefersReducedMotion ? 'animate-slide-up' : ''}`}>
          <h2 className="heading-secondary">From isolated signals to centralized asset visibility.</h2>
        </header>

        <div className="case-timeline">
          {steps.map((step, index) => (
            <div 
              key={step.label}
              className={`timeline-step ${isInView && !prefersReducedMotion ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="step-node">
                <span className="step-number">0{index + 1}</span>
              </div>
              <div className="step-content">
                <h3 className="step-label">{step.label}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        <div className={`case-footer ${isInView && !prefersReducedMotion ? 'animate-fade-in' : ''}`} style={{ animationDelay: '800ms' }}>
          <a href="#" className="btn btn--ghost">VIEW CASE STUDY &rarr;</a>
        </div>
      </div>
    </section>
  );
}
