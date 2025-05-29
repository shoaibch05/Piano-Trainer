// src/App.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import './styles.css';
import { usePiano } from './hooks/usePiano';
import { generateNotes } from './utils/utils';
import { PianoKeyboard } from './components/PianoKeyboard';
import { Footer } from './components/Footer';
import { songs } from './utils/songs';

// keyboard → note map
const keyMap = {
  q:'C3', Q:'C#3', w:'D3', W:'D#3', e:'E3',
  r:'F3', R:'F#3', t:'G3', T:'G#3', y:'A3', Y:'A#3', u:'B3',
  i:'C4', I:'C#4', o:'D4', O:'D#4', p:'E4',
  a:'F4', A:'F#4', s:'G4', S:'G#4', d:'A4', D:'A#4', f:'B4',
  g:'C5', G:'C#5', h:'D5', H:'D#5', j:'E5',
  k:'F5', K:'F#5', l:'G5', L:'G#5',
  z:'A5', Z:'A#5', x:'B5',
  c:'C6', C:'C#6', v:'D6', V:'D#6', b:'E6',
  n:'F6', N:'F#6', m:'G6', M:'G#6',
  ',':'A6','<':'A#6','.':'B6','>':'B#6'
};

// reverse for display labels
const keyMapReverse = Object.fromEntries(
  Object.entries(keyMap).map(([k,n]) => [n, k])
);

export default function App() {
  // usePiano now only handles audio and sets activeNote
  const { activeNote, playNote } = usePiano(keyMap);
  const notes = generateNotes(keyMap, 3, 6);
  const keyRefs = useRef({});
  const scrollRef = useRef();

  const [currentSong, setCurrentSong] = useState(null);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [showSongList, setShowSongList] = useState(false);

  // Scroll active key into view
  useEffect(() => {
    if (!activeNote || !keyRefs.current[activeNote]) return;
    const keyEl = keyRefs.current[activeNote];
    const container = scrollRef.current;
    const cRect = container.getBoundingClientRect();
    const kRect = keyEl.getBoundingClientRect();
    const target = container.scrollLeft +
      (kRect.left - cRect.left) -
      cRect.width/2 +
      kRect.width/2;
    container.scrollTo({ left: target, behavior: 'smooth' });
  }, [activeNote]);

  // Training logic: advance only when correct note
  const handlePlay = useCallback(note => {
    playNote(note);
    if (!currentSong) return;
    const expected = currentSong.notes[currentNoteIndex]?.note;
    if (note === expected) {
      setCurrentNoteIndex(i =>
        i < currentSong.notes.length - 1 ? i + 1 : i
      );
    }
  }, [playNote, currentSong, currentNoteIndex]);

  // **Override** keydown globally to pipe through handlePlay
  useEffect(() => {
    const onKeyDown = e => {
      const note = keyMap[e.key];
      if (note) handlePlay(note);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handlePlay]);

  const startSong = song => {
    setCurrentSong(song);
    setCurrentNoteIndex(0);
    setShowSongList(false);
  };
  const resetTraining = () => {
    setCurrentSong(null);
    setCurrentNoteIndex(0);
  };

  return (
    <div className="piano-container">
      <h1>Piano Trainer 🎹</h1>
      <p className="instructions">
        Type the labeled key (uppercase for sharps) or click a key!
        {currentSong && ` | Training: ${currentSong.title}`}
      </p>
      {currentSong && (
        <div className="note-tracker-container">
          <h3>Play these notes in order:</h3>
    <div className="note-tracker">
     {(() => {
       const chunkSize = 7;
       const chunkIndex = Math.floor(currentNoteIndex / chunkSize);
       const start = chunkIndex * chunkSize;
       const slice = currentSong.notes.slice(start, start + chunkSize);
       return slice.map((n, idx) => {
         const globalIdx = start + idx;
         return (
           <div
             key={globalIdx}
             className={`note ${
               globalIdx === currentNoteIndex ? 'active' : ''
             } ${globalIdx < currentNoteIndex ? 'played' : ''}`}
           >
             {n.note} <span className="key-label">({keyMapReverse[n.note]})</span>
           </div>
         );
       });
     })()}
    </div>
          <button className="reset-button" onClick={resetTraining}>
            Reset Training
          </button>
        </div>
      )}
      <div className="piano-scroll-container" ref={scrollRef}>
        <PianoKeyboard
          notes={notes}
          activeNote={activeNote}
          playNote={handlePlay}  // also clicks go through handlePlay
          keyRefs={keyRefs}
        />
      </div>

  

      <div className="training-section">
        <button className="trainingbtn" onClick={() => setShowSongList(s => !s)}>
          Training Tracks
        </button>
        {showSongList && (
  <div className="modal-backdrop" onClick={() => setShowSongList(false)}>
    <div className="song-list-modal" onClick={e => e.stopPropagation()}>
      <h2>Select a Track</h2>
      <div className="song-list">
        {Object.values(songs).map(song => (
          <div
            key={song.id}
            className="song-card"
            onClick={() => startSong(song)}
          >
            <h3>{song.title}</h3>
            <p>Difficulty: {song.difficulty}</p>
          </div>
        ))}
      </div>
      <button className="close-modal" onClick={() => setShowSongList(false)}>
        Close
      </button>
    </div>
  </div>
)}

      </div>

      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}
