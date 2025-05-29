// src/components/PianoKey.jsx
import React from 'react';

export function PianoKey({ note, isActive, onPlay }) {
  return (
    <div
      className={`key ${note.type} ${isActive ? 'active' : ''}`}
      onClick={() => onPlay(note.name)}
    >
      <div className="note-label">{note.label}</div>
      <div className="note-name">{note.name}</div>
    </div>
  );
}
