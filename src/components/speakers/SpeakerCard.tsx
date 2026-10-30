import React, { useRef } from 'react';
import { ISpeaker } from '@/types/speakers.ts';

interface SpeakerCardProps {
  speaker: ISpeaker;
  onOpen: (rect: DOMRect) => void;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, onOpen }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const open = () => {
    if (ref.current) onOpen(ref.current.getBoundingClientRect());
  };

  return (
    <button type="button" ref={ref} className="speaker-card" onClick={open}>
      <div className="speaker-photo-frame">
        <img src={speaker.profilePicture} alt={speaker.fullName} loading="lazy" decoding="async" />
      </div>
      <div className="speaker-name">{speaker.fullName}</div>
      <div className="speaker-hint">Click para ver la charla →</div>
    </button>
  );
};

export default SpeakerCard;
