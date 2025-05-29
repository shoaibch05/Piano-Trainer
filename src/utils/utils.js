// src/utils/utils.js
export const baseNotes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

// Generate note objects with keyboard label
export function generateNotes(keyMap, minOct=3, maxOct=6) {
  return Array
    .from({ length: maxOct-minOct+1 }, (_, i) => i + minOct)
    .flatMap(octave =>
      baseNotes.map(pitch => {
        const name = `${pitch}${octave}`;
        const type = pitch.includes('#') ? 'black' : 'white';
        const label = Object.entries(keyMap)
                            .find(([, note]) => note === name)?.[0] || '';
        return { name, type, pitch, octave, label };
      })
    );
}

// Convert note name (e.g. "C4") to frequency
export function getFrequency(note) {
  const A4 = 440;
  const order = baseNotes;
  const pitch = note.slice(0, -1);
  const octave = Number(note.slice(-1));
  const n = order.indexOf(pitch) + octave*12;
  const a4Index = order.indexOf('A') + 4*12;
  return A4 * Math.pow(2, (n - a4Index)/12);
}
