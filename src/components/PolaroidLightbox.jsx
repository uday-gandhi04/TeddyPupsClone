import React, { useEffect } from 'react';

export function PolaroidLightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [item, onClose]);

  return (
    <div
      className={`lightbox${item ? ' is-open' : ''}`}
      aria-hidden={!item}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {item && (
        <div className="lightbox__card">
          <button type="button" className="lightbox__close" aria-label="Close photo" onClick={onClose}>
            &times;
          </button>
          <img src={item.img} alt={item.caption} />
          <div className="lightbox__caption">{item.caption}</div>
        </div>
      )}
    </div>
  );
}

export function Toast({ message }) {
  return (
    <div className={`toast${message ? ' is-visible' : ''}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}
