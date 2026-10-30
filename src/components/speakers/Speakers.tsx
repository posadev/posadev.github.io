import React, { useState } from 'react';
import Win from '@/components/Win';
import SpeakerCard from '@/components/speakers/SpeakerCard.tsx';
import SpeakerLightbox from '@/components/speakers/SpeakerLightbox.tsx';
import { useAppContext } from '@/context/AppContext.tsx';
import { ISpeaker } from '@/types/speakers.ts';

const PAGE_SIZE = 9;

const Speakers = () => {
  const { speakers, speakersPage: page, setSpeakersPage: setPage } = useAppContext();
  const [active, setActive] = useState<{ speaker: ISpeaker; rect: DOMRect } | null>(null);

  if (speakers.length === 0) return null;

  const totalPages = Math.ceil(speakers.length / PAGE_SIZE);
  const currentPage = Math.min(page, totalPages - 1);
  const start = currentPage * PAGE_SIZE;
  const pageSpeakers = speakers.slice(start, start + PAGE_SIZE);

  return (
    <Win
      title="Speakers.exe"
      footer={
        <>
          <span>{speakers.length} speakers</span>
          <span>edición 2026</span>
        </>
      }
    >
      <div className="sec-head">
        <h2>Quién<br />dara charla o taller<em>.</em></h2>
        <p className="sec-sub">
          Las personas que van a compartir su conocimiento y experiencia en Posadev 2026.
        </p>
      </div>
      <div className="speaker-grid">
        {pageSpeakers.map((speaker: ISpeaker) => (
          <SpeakerCard
            key={speaker.id}
            speaker={speaker}
            onOpen={(rect) => setActive({ speaker, rect })}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="speaker-pagination">
          <button
            type="button"
            className="retro-btn ghost"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
          >
            Anterior
          </button>
          <span className="speaker-pagination-label">
            Página {currentPage + 1} de {totalPages}
          </span>
          <button
            type="button"
            className="retro-btn ghost"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
          >
            Siguiente
          </button>
        </div>
      )}
      {active && (
        <SpeakerLightbox
          speaker={active.speaker}
          originRect={active.rect}
          onClose={() => setActive(null)}
        />
      )}
    </Win>
  );
};

export default Speakers;
