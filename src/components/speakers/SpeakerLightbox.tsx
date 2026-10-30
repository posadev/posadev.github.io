import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { ISpeaker } from '@/types/speakers.ts';

interface SpeakerLightboxProps {
  speaker: ISpeaker;
  originRect: DOMRect;
  onClose: () => void;
}

type Phase = 'opening' | 'flipping' | 'open' | 'unflipping' | 'closing';

type BoxRect = { top: number; left: number; width: number; height: number };

const rectFromDom = (rect: DOMRect): BoxRect => ({
  top: rect.top,
  left: rect.left,
  width: rect.width,
  height: rect.height,
});

const getCenteredRect = (): BoxRect => {
  const width = Math.min(window.innerWidth * 0.86, 420);
  const height = width * 1.25;
  return {
    top: (window.innerHeight - height) / 2,
    left: (window.innerWidth - width) / 2,
    width,
    height,
  };
};

const SpeakerLightbox: React.FC<SpeakerLightboxProps> = ({ speaker, originRect, onClose }) => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>('opening');
  const [rect, setRect] = useState<BoxRect>(rectFromDom(originRect));
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const { body } = document;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    const id = requestAnimationFrame(() => {
      setVisible(true);
      setRect(getCenteredRect());
    });
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      cancelAnimationFrame(id);
    };
  }, []);

  const startClose = () => {
    if (phase === 'open' || phase === 'flipping') {
      setPhase('unflipping');
      setFlipped(false);
    } else if (phase === 'opening') {
      setPhase('closing');
      setVisible(false);
      setFlipped(false);
      setRect(rectFromDom(originRect));
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') startClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [phase]);

  const handleSizeTransitionEnd = () => {
    if (phase === 'opening') {
      setPhase('flipping');
      setFlipped(true);
    } else if (phase === 'closing') {
      onClose();
    }
  };

  const handleFlipTransitionEnd = () => {
    if (phase === 'flipping') {
      setPhase('open');
    } else if (phase === 'unflipping') {
      setPhase('closing');
      setVisible(false);
      setRect(rectFromDom(originRect));
    }
  };

  const [firstSession] = speaker.sessions;

  return createPortal(
    <div
      className={`speaker-lightbox-backdrop${visible ? ' visible' : ''}`}
      onClick={startClose}
    >
      <div
        className={`speaker-lightbox-card${flipped ? ' flipped' : ''}`}
        style={{ top: rect.top, left: rect.left, width: rect.width, height: rect.height }}
        onClick={(e) => e.stopPropagation()}
        onTransitionEnd={(e) => {
          if (e.propertyName === 'width') handleSizeTransitionEnd();
          if (e.propertyName === 'transform') handleFlipTransitionEnd();
        }}
      >
        <div className="speaker-lightbox-inner">
          <div className="speaker-lightbox-front">
            <div className="speaker-photo-frame">
              <img src={speaker.profilePicture} alt={speaker.fullName} />
            </div>
            <div className="speaker-name">{speaker.fullName}</div>
          </div>
          <div className="speaker-lightbox-back">
            {firstSession ? (
              <>
                <div className="speaker-session">{firstSession.title}</div>
                {firstSession.description && (
                  <div className="speaker-abstract">{firstSession.description}</div>
                )}
              </>
            ) : (
              <div className="speaker-session">Charla por confirmar</div>
            )}
            <div className="speaker-lightbox-actions">
              <button
                type="button"
                className="retro-btn ghost"
                onClick={() => navigate(`/speaker/${speaker.id}`)}
              >
                Ver biografía →
              </button>
              <button type="button" className="speaker-lightbox-close" onClick={startClose}>
                ← Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SpeakerLightbox;
