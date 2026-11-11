import React, { useEffect, useMemo, useState } from 'react';
import Win from '@/components/Win';
import { useAppContext } from '@/context/AppContext.tsx';
import { formatTiemstamp } from '@/lib/utils.ts';
import { ISessionInfo } from '@/types/sessions.ts';

type SlotStatus = 'live' | 'past' | 'upcoming';

const columnLetter = (i: number) => String.fromCharCode(65 + i);

const getStatus = (session: ISessionInfo, now: Date): SlotStatus => {
  const start = new Date(session.startsAt);
  const end = new Date(session.endsAt);
  if (now >= start && now < end) return 'live';
  if (now >= end) return 'past';
  return 'upcoming';
};

const SessionCardMini = ({ session }: { session: ISessionInfo }) => (
  <div className="agenda-session-card">
    <div className="agenda-session-title">{session.title}</div>
    {session.speakers.length > 0 && (
      <div className="agenda-session-speakers">
        {session.speakers.map((s) => s.name).join(', ')}
      </div>
    )}
  </div>
);

const Agenda = () => {
  const { sessions, rooms } = useAppContext();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const { scheduled, unscheduled } = useMemo(() => {
    const scheduled = sessions.filter((s) => !!s.startsAt);
    const unscheduled = sessions.filter((s) => !s.startsAt);
    return { scheduled, unscheduled };
  }, [sessions]);

  const slots = useMemo(() => {
    const map = new Map<string, ISessionInfo[]>();
    [...scheduled]
      .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime())
      .forEach((session) => {
        const key = session.startsAt;
        if (!map.has(key)) map.set(key, []);
        map.get(key)!.push(session);
      });
    return [...map.values()];
  }, [scheduled]);

  const getRoomName = (roomId: string) =>
    rooms.find((room) => String(room.id) === String(roomId))?.name;

  // Plenary sessions (e.g. lunch) apply to every room at once, so they don't claim a column.
  const roomScheduled = useMemo(() => scheduled.filter((s) => s.category !== 'Plenaria'), [scheduled]);

  // Columns follow Sessionize's own room order (its "sort" field), not first-appearance —
  // that's what keeps Principal between Foyer and Arbol instead of wherever a talk happened to land first.
  const roomColumns = useMemo(() => {
    const usedRoomIds = new Set(roomScheduled.map((s) => String(s.roomId)).filter(Boolean));
    return rooms
      .filter((room) => usedRoomIds.has(String(room.id)))
      .map((room) => ({ id: String(room.id), name: room.name }));
  }, [roomScheduled, rooms]);

  // A room always lands in the same column across every row.
  const roomColumnMap = useMemo(() => {
    const map = new Map<string, number>();
    roomColumns.forEach((room, i) => map.set(room.id, i));
    return map;
  }, [roomColumns]);

  const columnLetters = useMemo(
    () => Array.from({ length: roomColumns.length + 1 }, (_, i) => columnLetter(i)),
    [roomColumns.length],
  );

  if (sessions.length === 0) return null;

  const toColumns = (slotSessions: ISessionInfo[]) => {
    const columns: (ISessionInfo | null)[] = roomColumns.map(() => null);
    const leftover: ISessionInfo[] = [];
    slotSessions.forEach((session) => {
      const col = session.roomId ? roomColumnMap.get(String(session.roomId)) : undefined;
      if (col !== undefined && columns[col] === null) {
        columns[col] = session;
      } else {
        leftover.push(session);
      }
    });
    leftover.forEach((session) => {
      const idx = columns.findIndex((c) => c === null);
      if (idx !== -1) columns[idx] = session;
    });
    return columns;
  };

  // One lookup per slot of which session (if any) sits in each room column.
  const slotColumns = slots.map(toColumns);
  const slotStarts = slots.map((slotSessions) => slotSessions[0].startsAt);
  // A plenary row (e.g. lunch) is a hard stop — no talk or workshop visually spans across it,
  // even if its real end time technically overlaps a few minutes into the break.
  const isPlenarySlot = slots.map(
    (slotSessions) => slotSessions.length === 1 && slotSessions[0].category === 'Plenaria',
  );

  // Workshops run longer than a regular talk, so they cover more than one row —
  // count how many slot rows fall inside the session's own start/end window.
  const spanFor = (session: ISessionInfo, slotIndex: number) => {
    const end = new Date(session.endsAt).getTime();
    let span = 1;
    while (
      slotIndex + span < slotStarts.length &&
      !isPlenarySlot[slotIndex + span] &&
      new Date(slotStarts[slotIndex + span]).getTime() < end
    ) {
      span += 1;
    }
    return span;
  };

  // A room column stays "claimed" by a spanning session for every row it covers.
  const skipUntil = roomColumns.map(() => 0);

  return (
    <Win
      title="Agenda"
      footer={
        <>
          <span>{sessions.length} actividades</span>
          <span>Sáb 28 Nov</span>
        </>
      }
    >
      <div className="sec-head">
        <h2>La<br />agenda<em>.</em></h2>
        <p className="sec-sub">
          {slots.length > 0
            ? 'El itinerario del día. La charla que está pasando en este momento se resalta sola.'
            : 'Estas son las charlas confirmadas para Posadev 2026. El horario exacto de cada una se publica pronto.'}
        </p>
      </div>

      <div className="agenda-table" style={{ '--agenda-cols': roomColumns.length } as React.CSSProperties}>
        <div className="agenda-coords-row">
          <div className="agenda-coords-corner" />
          {columnLetters.map((letter) => (
            <div className="agenda-coords-letter" key={letter}>{letter}</div>
          ))}
        </div>
        <div className="agenda-table-head">
          <div className="agenda-cell-rownum">1</div>
          <div>Hora</div>
          {roomColumns.map((room) => (
            <div key={room.id}>{room.name}</div>
          ))}
        </div>
        {slots.length > 0 ? (
          <div className="agenda-rows">
            {slots.map((slotSessions, slotIndex) => {
              const rowStatus = getStatus(slotSessions[0], now);
              const startsAt = slotSessions[0].startsAt;
              const gridRow = slotIndex + 1;
              // A plenary session (e.g. lunch) applies to every room, so it gets one cell across the whole row.
              const plenarySession =
                slotSessions.length === 1 && slotSessions[0].category === 'Plenaria' ? slotSessions[0] : null;
              const cells = [
                <div
                  className={`agenda-cell-rownum agenda-row-${rowStatus}`}
                  style={{ gridRow, gridColumn: 1 }}
                  key={`rownum-${startsAt}`}
                >
                  {slotIndex + 2}
                </div>,
                <div
                  className={`agenda-cell-time agenda-row-${rowStatus}`}
                  style={{ gridRow, gridColumn: 2 }}
                  key={`time-${startsAt}`}
                >
                  <span>{formatTiemstamp(startsAt)}</span>
                  {rowStatus === 'live' && <span className="agenda-live-badge">● En vivo</span>}
                </div>,
              ];

              if (plenarySession) {
                // Skip any columns still claimed by an earlier spanning session (e.g. a workshop
                // running long into lunch) — the banner only covers rooms that are actually free.
                const totalCols = 3 + roomColumns.length;
                let col = 3;
                let segment = 0;
                while (col < totalCols) {
                  if (skipUntil[col - 3] > slotIndex) {
                    col += 1;
                    continue;
                  }
                  let endCol = col;
                  while (endCol < totalCols && skipUntil[endCol - 3] <= slotIndex) endCol += 1;
                  cells.push(
                    <div
                      className={`agenda-cell agenda-cell-full agenda-row-${getStatus(plenarySession, now)}`}
                      style={{ gridRow, gridColumn: `${col} / ${endCol}` }}
                      key={`full-${startsAt}-${segment}`}
                    >
                      <SessionCardMini session={plenarySession} />
                    </div>,
                  );
                  segment += 1;
                  col = endCol;
                }
                return cells;
              }

              slotColumns[slotIndex].forEach((session, roomIndex) => {
                if (slotIndex < skipUntil[roomIndex]) return;
                const gridColumn = roomIndex + 3;
                if (session) {
                  const span = spanFor(session, slotIndex);
                  skipUntil[roomIndex] = slotIndex + span;
                  cells.push(
                    <div
                      className={`agenda-cell agenda-row-${getStatus(session, now)}`}
                      style={{ gridRow: `${gridRow} / span ${span}`, gridColumn }}
                      key={`${roomColumns[roomIndex].id}-${startsAt}`}
                    >
                      <SessionCardMini session={session} />
                    </div>,
                  );
                } else {
                  cells.push(
                    <div
                      className={`agenda-cell agenda-row-${rowStatus}`}
                      style={{ gridRow, gridColumn }}
                      key={`${roomColumns[roomIndex].id}-${startsAt}`}
                    >
                      <div className="agenda-cell-empty" />
                    </div>,
                  );
                }
              });

              return cells;
            })}
          </div>
        ) : (
          <div className="agenda-row">
            <div className="agenda-cell-rownum">2</div>
            <div className="agenda-empty-message">
              El horario por sala todavía no se publica en Sessionize. En cuanto esté listo, aquí va a aparecer
              franja por franja — por ahora puedes ver todas las charlas confirmadas abajo.
            </div>
          </div>
        )}
      </div>

      {unscheduled.length > 0 && (
        <div className={slots.length > 0 ? 'agenda-pending' : undefined}>
          {slots.length > 0 && <div className="agenda-pending-label">Por anunciar</div>}
          <div className="agenda-pending-grid">
            {unscheduled.map((session) => (
              <SessionCardMini key={session.id} session={session} />
            ))}
          </div>
        </div>
      )}
    </Win>
  );
};

export default Agenda;
