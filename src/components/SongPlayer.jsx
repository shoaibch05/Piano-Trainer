// src/components/SongPlayer.jsx
import React, { useState, useEffect, useRef } from 'react';
import { PianoKey } from './PianoKey';

export function SongPlayer({ song, onExit }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeNotes, setActiveNotes] = useState([]);
  const animationRef = useRef();
  const startTimeRef = useRef();

  // Game loop
  useEffect(() => {
    if (!isPlaying) return;

    const updateTime = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) / 1000;
      setCurrentTime(elapsed);

      // Get notes that should be active now
      const currentActive = song.notes.filter(
        note => note.time <= elapsed && note.time + note.duration > elapsed
      );
      setActiveNotes(currentActive.map(n => n.note));

      animationRef.current = requestAnimationFrame(updateTime);
    };

    animationRef.current = requestAnimationFrame(updateTime);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPlaying, song]);

  return (
    <div className="song-player">
      <div className="song-header">
        <h2>{song.title}</h2>
        <button onClick={onExit}>Exit</button>
      </div>
      
      <div className="song-controls">
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div className="time-display">
          {currentTime.toFixed(1)} / {song.duration}
        </div>
      </div>

      <div className="upcoming-notes">
        {song.notes
          .filter(note => note.time >= currentTime && note.time < currentTime + 3)
          .map((note, i) => (
            <div key={i} className="note-indicator">
              {note.note}
            </div>
          ))}
      </div>
    </div>
  );
}