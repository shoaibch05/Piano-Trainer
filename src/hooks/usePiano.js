import { useState, useEffect, useCallback } from 'react';
import Soundfont from 'soundfont-player';

export function usePiano(keyMap) {
  const [piano, setPiano] = useState(null);
  const [activeNote, setActiveNote] = useState(null);
  const [lastPlayedNote, setLastPlayedNote] = useState(null);

  // load Soundfont
  useEffect(() => {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    Soundfont.instrument(ac, 'acoustic_grand_piano').then(setPiano);
  }, []);

  const playNote = useCallback((note) => {
    // Only reset if it's a different note
    if (note !== lastPlayedNote) {
      setActiveNote(null);
      setTimeout(() => {
        setActiveNote(note);
        setLastPlayedNote(note);
        piano?.play(note);
      }, 10);
    } else {
      // For same note, play immediately without reset
      setActiveNote(note);
      piano?.play(note);
    }
  }, [piano, lastPlayedNote]);

  // keyboard listener
  useEffect(() => {
    const down = e => {
      const mapping = keyMap[e.key];
      if (mapping) playNote(mapping);
    };
    
    window.addEventListener('keydown', down);
    return () => window.removeEventListener('keydown', down);
  }, [keyMap, playNote]);

  return { activeNote, playNote };
}