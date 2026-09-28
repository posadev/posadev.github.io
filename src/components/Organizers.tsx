import React from 'react';
import Win from '@/components/Win';
import { organizers } from '@/data/organizers';

const Organizers = () => (
  <Win
    title="👥 Organizadores.txt"
    footer={
      <>
        <span>{organizers.length} organizadores</span>
        <span>edición 2026</span>
      </>
    }
  >
    <div className="sec-head">
      <h2>Quién<br />organiza<em>.</em></h2>
      <p className="sec-sub">
        Las personas comprometidas a organizar Posadev durante todo el año para que
        podamos tener Posadev en esta edicion, creada por y para las
        comunidades tech.
      </p>
    </div>
    <div className="organizer-grid">
      {organizers.map((organizer) => (
        <div className="organizer-card" key={organizer.name}>
          <div className="organizer-photo-frame">
            <img src={organizer.image} alt={organizer.name} />
          </div>
          <div className="organizer-name">{organizer.name}</div>
          <div className="organizer-role">{organizer.role}</div>
          <div className="organizer-divider" aria-hidden="true" />
          <div className="organizer-communities-label">· Comunidades</div>
          <ul className="organizer-communities-list">
            {organizer.communities.map((community) => (
              <li key={community.name}>
                {community.link ? (
                  <a href={community.link} target="_blank" rel="noopener noreferrer">
                    → {community.name}
                  </a>
                ) : (
                  <span>→ {community.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Win>
);

export default Organizers;
