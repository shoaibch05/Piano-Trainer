import React from 'react';
import { PianoKey } from './PianoKey';

export function PianoKeyboard({ notes, activeNote, playNote, keyRefs }) {
  const whiteNotes = notes.filter(n => n.type === 'white');
  const blackNotes = notes.filter(n => n.type === 'black');

  return (
    <div className="piano-keys">
      {whiteNotes.map(white => {
        const black = blackNotes.find(
          b => b.octave === white.octave && b.pitch === `${white.pitch}#`
        );
        return (
          <div key={white.name} className="white-key-wrapper" ref={el => { keyRefs.current[white.name] = el }}>
            <PianoKey note={white} isActive={activeNote===white.name} onPlay={playNote}/>
            {black && (
              <div className="black-key-wrapper" ref={el => { keyRefs.current[black.name] = el }}>
                <PianoKey note={black} isActive={activeNote===black.name} onPlay={playNote}/>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}