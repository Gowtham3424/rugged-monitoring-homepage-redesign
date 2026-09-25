import { assetCards } from '../../data/assets';
import { useInView } from '../../hooks/useAnimations';
import './AssetCards.css';

// SVG icons for different asset types
const getAssetIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'transformers':
      return (
        <svg viewBox="0 0 40 40" className="asset-icon">
          <rect x="10" y="10" width="20" height="25" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M5 15 L10 15 M30 15 L35 15 M15 5 L15 10 M25 5 L25 10" stroke="currentColor" strokeWidth="2" />
          <circle cx="20" cy="22" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'power cables':
      return (
        <svg viewBox="0 0 40 40" className="asset-icon">
          <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="20" cy="20" r="2" fill="currentColor" />
        </svg>
      );
    case 'switchgear':
      return (
        <svg viewBox="0 0 40 40" className="asset-icon">
          <rect x="8" y="5" width="24" height="30" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="15" x2="32" y2="15" stroke="currentColor" strokeWidth="2" />
          <rect x="12" y="20" width="6" height="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="22" y="20" width="6" height="10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'circuit breakers':
      return (
        <svg viewBox="0 0 40 40" className="asset-icon">
          <circle cx="10" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="30" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="18" x2="28" y2="12" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'rotating machines':
      return (
        <svg viewBox="0 0 40 40" className="asset-icon">
          <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 6 L20 12 M20 28 L20 34 M6 20 L12 20 M28 20 L34 20" stroke="currentColor" strokeWidth="2" />
          <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'batteries':
      return (
        <svg viewBox="0 0 40 40" className="asset-icon">
          <rect x="12" y="10" width="16" height="24" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="16" y="6" width="8" height="4" fill="currentColor" />
          <line x1="16" y1="18" x2="24" y2="18" stroke="currentColor" strokeWidth="2" />
          <line x1="16" y1="26" x2="24" y2="26" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 40 40" className="asset-icon">
          <rect x="10" y="10" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
  }
};

const AssetCards = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="asset-cards-section" ref={ref}>
      <div className="asset-cards-header">
        <h2 className={`asset-cards-heading ${inView ? 'is-visible' : ''}`}>Make every asset predictable.</h2>
      </div>
      
      <div className="asset-cards-container">
        <div className="asset-cards-scroll">
          {assetCards.map((asset, index: number) => (
            <div 
              key={asset.id} 
              className={`asset-card ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card-illustration">
                {getAssetIcon(asset.name)}
              </div>
              <h3 className="card-title">{asset.name}</h3>
              <p className="card-description">{asset.description}</p>
              
              <div className="card-parameters">
                {asset.parameters.map((param: string, i: number) => (
                  <span key={i} className="parameter-tag">{param}</span>
                ))}
              </div>

              <div className="card-signal">
                <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path 
                    d="M0 10 L20 10 L30 2 L40 18 L50 10 L80 10 L85 5 L90 15 L95 10 L100 10" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    className="signal-line"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetCards;
