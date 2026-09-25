import React, { useState } from 'react';
import { assetEcosystem } from '../../data/assets';
import { useCountUp } from '../../hooks/useAnimations';
import './HealthPlatform.css';

const HealthPlatform: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAsset = assetEcosystem[activeIndex];
  
  const animatedHealth = useCountUp(activeAsset.health, 1000, true);

  return (
    <section className="section health-section">
      <div className="container">
        <h2 className="section-heading text-center">One health platform for electrical assets.</h2>
        
        <div className="ecosystem-container">
          {/* Desktop Radial Layout */}
          <div className="radial-layout">
            <div className="center-node">
              <div className="center-panel">
                <div className="asset-name">{activeAsset.name}</div>
                <div className="health-display">
                  <span className="health-label">HEALTH</span>
                  <span className="health-value">{animatedHealth}%</span>
                </div>
                
                <div className="parameters-list">
                  {activeAsset.parameters.map((p, idx) => (
                    <div key={idx} className="parameter-row">
                      <span className="param-label">{p.label}</span>
                      <span className="param-value">{p.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="status-indicator">
                  <span className="param-label">STATUS</span>
                  <div className="status-badge">
                    <span className={`status-dot ${activeAsset.status}`}></span>
                    <span className="param-value">{activeAsset.status.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>

            {assetEcosystem.map((asset, index) => {
              const angle = (index / assetEcosystem.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 280; // Desktop radius
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              const isActive = index === activeIndex;

              return (
                <div key={asset.id} className="radial-node-wrapper">
                  <svg className="connection-line" style={{ left: '50%', top: '50%', position: 'absolute', overflow: 'visible' }}>
                    <line 
                      x1="0" y1="0" 
                      x2={x} y2={y} 
                      className={`line-path ${isActive ? 'active' : ''}`}
                    />
                  </svg>
                  <button
                    className={`asset-node ${isActive ? 'active' : ''}`}
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    {asset.shortName}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile Horizontal Layout */}
          <div className="mobile-layout">
            <div className="mobile-cards-scroll">
              {assetEcosystem.map((asset, index) => (
                <button
                  key={asset.id}
                  className={`mobile-card ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="mobile-card-header">
                    <span className={`status-dot ${asset.status}`}></span>
                    <span className="mobile-card-name">{asset.shortName}</span>
                  </div>
                  <div className="mobile-card-health">{asset.health}%</div>
                </button>
              ))}
            </div>
            
            <div className="mobile-details-panel">
              <div className="asset-name">{activeAsset.name}</div>
              <div className="health-display">
                <span className="health-label">HEALTH</span>
                <span className="health-value">{animatedHealth}%</span>
              </div>
              <div className="parameters-list">
                {activeAsset.parameters.map((p, idx) => (
                  <div key={idx} className="parameter-row">
                    <span className="param-label">{p.label}</span>
                    <span className="param-value">{p.value}</span>
                  </div>
                ))}
              </div>
              <div className="status-indicator" style={{ marginTop: '0.5rem' }}>
                <span className="param-label">STATUS</span>
                <div className="status-badge">
                  <span className={`status-dot ${activeAsset.status}`}></span>
                  <span className="param-value">{activeAsset.status.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthPlatform;
