import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Win from '@/components/Win';
import { useAppContext } from '@/context/AppContext.tsx';
import { scrollToTop } from '@/lib/utils.ts';

const SpeakerBio = () => {
  const navigate = useNavigate();
  const { speakerId } = useParams();
  const { speakers } = useAppContext();
  const speaker = speakers.find((s) => s.id === speakerId);

  useEffect(() => {
    scrollToTop();
  }, []);

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/#speakers');
    }
  };

  if (!speaker) {
    return (
      <div className="desktop">
        <div className="desktop-wrap">
          <section id="speaker-bio">
            <Win title="Speaker.bio">
              <div className="sec-head">
                <h2>Speaker<br />no encontrado<em>.</em></h2>
                <p className="sec-sub">No encontramos a este ponente.</p>
              </div>
              <button type="button" className="retro-btn ghost" onClick={goBack}>
                ← Volver
              </button>
            </Win>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="desktop">
      <div className="desktop-wrap">
        <section id="speaker-bio">
          <Win
            title={`${speaker.fullName}.bio`}
            footer={
              <>
                <span>{speaker.sessions.length} charla{speaker.sessions.length === 1 ? '' : 's'}</span>
                <span>edición 2026</span>
              </>
            }
          >
            <button type="button" className="retro-btn ghost" onClick={goBack}>
              ← Volver
            </button>

            <div className="bio-header">
              <div className="speaker-photo-frame bio-photo-frame">
                <img src={speaker.profilePicture} alt={speaker.fullName} loading="lazy" decoding="async" />
              </div>
              <div>
                <h2 className="bio-name">{speaker.fullName}</h2>
                {speaker.tagLine && <p className="bio-tagline">{speaker.tagLine}</p>}
                {speaker.bio && <p className="bio-text">{speaker.bio}</p>}
              </div>
            </div>

            {speaker.sessions.length > 0 && (
              <div className="bio-sessions">
                <div className="bio-sessions-label">Charlas</div>
                {speaker.sessions.map((session) => (
                  <div className="bio-session-card" key={session.id}>
                    <div className="speaker-session">{session.title}</div>
                    {session.description && (
                      <div className="speaker-abstract">{session.description}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Win>
        </section>
      </div>
    </div>
  );
};

export default SpeakerBio;
