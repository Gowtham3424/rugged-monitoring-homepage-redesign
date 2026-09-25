import React, { useEffect, useRef, useState } from 'react';
import { trendData } from '../../data/assets';
import { useInView, useCountUp, usePrefersReducedMotion } from '../../hooks/useAnimations';
import './AssetDashboard.css';

const AssetDashboard = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const prefersReducedMotion = usePrefersReducedMotion();
  
  const healthCount = useCountUp(94, 2000, inView);
  const tempCount = useCountUp(68, 1800, inView);
  const loadCount = useCountUp(73, 1600, inView);

  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const generatePath = () => {
    if (!trendData || trendData.length === 0) return '';
    const maxX = 24;
    const minY = 85;
    const maxY = 100;
    const w = 760;
    const h = 180;
    const offsetX = 40;
    const offsetY = 10;
    
    return trendData.map((d, i) => {
      const timeVal = parseFloat(d.time.replace(':', '.')) || i * (24 / (trendData.length - 1 || 1));
      const x = offsetX + (timeVal / maxX) * w;
      const y = offsetY + h - ((d.value - minY) / (maxY - minY)) * h;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  const getPoints = () => {
    if (!trendData || trendData.length === 0) return [];
    const maxX = 24;
    const minY = 85;
    const maxY = 100;
    const w = 760;
    const h = 180;
    const offsetX = 40;
    const offsetY = 10;

    return trendData.map((d, i) => {
      const timeVal = parseFloat(d.time.replace(':', '.')) || i * (24 / (trendData.length - 1 || 1));
      const x = offsetX + (timeVal / maxX) * w;
      const y = offsetY + h - ((d.value - minY) / (maxY - minY)) * h;
      return { x, y, time: d.time, value: d.value };
    });
  };

  const points = getPoints();

  return (
    <section className="asset-dashboard-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="asset-dashboard-container">
        <h2 className="dashboard-heading">See what your assets are telling you.</h2>
        
        <div className={`dashboard-interface ${inView ? 'is-visible' : ''}`}>
          <div className="dashboard-topbar">
            <div className="topbar-logo">RM EYE</div>
            <div className="topbar-status">
              <span className="status-dot status-dot--normal"></span> SYSTEM NORMAL
            </div>
            <div className="topbar-label">CONCEPTUAL MONITORING INTERFACE</div>
          </div>
          
          <div className="dashboard-content">
            <h3 className="asset-identifier">TRANSFORMER TR-042</h3>
            
            <div className="metric-cards">
              <div className="metric-card">
                <div className="metric-label">HEALTH</div>
                <div className="metric-value">{healthCount}%</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">TEMPERATURE</div>
                <div className="metric-value">{tempCount}°C</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">LOAD</div>
                <div className="metric-value">{loadCount}%</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">RISK</div>
                <div className="metric-value risk-low">LOW</div>
              </div>
            </div>

            <div className="chart-container">
              <div className="chart-title">CONDITION TREND (24H)</div>
              <svg className="trend-chart" viewBox="0 0 820 240" preserveAspectRatio="xMidYMid meet">
                {/* Grid lines */}
                <line x1="40" y1="10" x2="800" y2="10" className="grid-line" />
                <line x1="40" y1="70" x2="800" y2="70" className="grid-line" />
                <line x1="40" y1="130" x2="800" y2="130" className="grid-line" />
                <line x1="40" y1="190" x2="800" y2="190" className="grid-line" />

                {/* Y-axis labels */}
                <text x="35" y="15" className="grid-label" textAnchor="end">100%</text>
                <text x="35" y="75" className="grid-label" textAnchor="end">95%</text>
                <text x="35" y="135" className="grid-label" textAnchor="end">90%</text>
                <text x="35" y="195" className="grid-label" textAnchor="end">85%</text>

                <path
                  ref={pathRef}
                  d={generatePath()}
                  className="trend-line"
                  fill="none"
                  strokeDasharray={pathLength}
                  strokeDashoffset={inView && !prefersReducedMotion ? 0 : pathLength}
                />
                
                {points.map((pt, i) => (
                  <g key={i} className="data-point-group">
                    <circle cx={pt.x} cy={pt.y} r="5" className="data-point" />
                    <text x={pt.x} y={pt.y - 16} className="tooltip-text" textAnchor="middle">
                      {pt.time} — {pt.value}%
                    </text>
                  </g>
                ))}

                {/* X-axis time labels */}
                {points.map((pt, i) => (
                  <text key={`t${i}`} x={pt.x} y="210" className="time-label" textAnchor="middle">
                    {pt.time}
                  </text>
                ))}
              </svg>
            </div>
          </div>

          <div className="dashboard-footer">
            CONCEPTUAL MONITORING INTERFACE · DEMONSTRATION DATA
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetDashboard;
