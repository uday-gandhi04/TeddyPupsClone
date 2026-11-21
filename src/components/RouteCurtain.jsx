import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MascotWalking, PawIcon } from './MascotSvgs';

export default function RouteCurtain() {
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(false);
    const timer = setTimeout(() => setHidden(true), 620);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`route-curtain${hidden ? ' is-hidden' : ''}`} aria-hidden={hidden}>
      <div className="curtain-walkway">
        <div className="curtain-paws" style={{ color: 'var(--accent-terracotta)' }}>
          <span className="curtain-paw"><PawIcon /></span>
          <span className="curtain-paw"><PawIcon /></span>
          <span className="curtain-paw"><PawIcon /></span>
        </div>
        <div className="curtain-mascot">
          <MascotWalking />
        </div>
      </div>
      <div className="curtain-tagline">every puppy is family</div>
    </div>
  );
}
