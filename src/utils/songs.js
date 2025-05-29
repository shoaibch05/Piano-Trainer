// src/utils/songs.js

export const songs = {
  twinkle: {
    id: 'twinkle',
    title: "Twinkle Twinkle Little Star",
    artist: "Traditional",
    difficulty: "easy",
    duration: 16, // approx seconds
    notes: [
      // Line 1
      { note: "C4", time: 0.0, duration: 0.5 },
      { note: "C4", time: 0.5, duration: 0.5 },
      { note: "G4", time: 1.0, duration: 0.5 },
      { note: "G4", time: 1.5, duration: 0.5 },
      { note: "A4", time: 2.0, duration: 0.5 },
      { note: "A4", time: 2.5, duration: 0.5 },
      { note: "G4", time: 3.0, duration: 1.0 },

      // Line 2
      { note: "F4", time: 4.0, duration: 0.5 },
      { note: "F4", time: 4.5, duration: 0.5 },
      { note: "E4", time: 5.0, duration: 0.5 },
      { note: "E4", time: 5.5, duration: 0.5 },
      { note: "D4", time: 6.0, duration: 0.5 },
      { note: "D4", time: 6.5, duration: 0.5 },
      { note: "C4", time: 7.0, duration: 1.0 },

      // Line 3 (repeat)
      { note: "G4", time: 8.5, duration: 0.5 },
      { note: "G4", time: 9.0, duration: 0.5 },
      { note: "F4", time: 9.5, duration: 0.5 },
      { note: "F4", time: 10.0, duration: 0.5 },
      { note: "E4", time: 10.5, duration: 0.5 },
      { note: "E4", time: 11.0, duration: 0.5 },
      { note: "D4", time: 11.5, duration: 1.0 },

      // Line 3 (repeat)
      { note: "G4", time: 8.5, duration: 0.5 },
      { note: "G4", time: 9.0, duration: 0.5 },
      { note: "F4", time: 9.5, duration: 0.5 },
      { note: "F4", time: 10.0, duration: 0.5 },
      { note: "E4", time: 10.5, duration: 0.5 },
      { note: "E4", time: 11.0, duration: 0.5 },
      { note: "D4", time: 11.5, duration: 1.0 },

      // Line 4 (finish)
      { note: "C4", time: 13.0, duration: 0.5 },
      { note: "C4", time: 13.5, duration: 0.5 },
      { note: "G4", time: 14.0, duration: 0.5 },
      { note: "G4", time: 14.5, duration: 0.5 },
      { note: "A4", time: 15.0, duration: 0.5 },
      { note: "A4", time: 15.5, duration: 0.5 },
      { note: "G4", time: 16.0, duration: 1.0 }
    ]
  },
  happy_birthday: {
    id: 'happy_birthday',
    title: 'Happy Birthday',
    artist: 'Traditional',
    difficulty: 'easy',
    duration: 12,
    notes: [
      { note: 'G4', time: 0.0, duration: 0.5 },
      { note: 'G4', time: 0.5, duration: 0.5 },
      { note: 'A4', time: 1.0, duration: 1.0 },
      { note: 'G4', time: 2.0, duration: 1.0 },
      { note: 'C5', time: 3.0, duration: 1.0 },
      { note: 'B4', time: 4.0, duration: 2.0 },

      { note: 'G4', time: 6.0, duration: 0.5 },
      { note: 'G4', time: 6.5, duration: 0.5 },
      { note: 'A4', time: 7.0, duration: 1.0 },
      { note: 'G4', time: 8.0, duration: 1.0 },
      { note: 'D5', time: 9.0, duration: 1.0 },
      { note: 'C5', time: 10.0, duration: 2.0 },

      { note: 'G4', time: 12.0, duration: 0.5 },
      { note: 'G4', time: 12.5, duration: 0.5 },
      { note: 'G5', time: 13.0, duration: 1.0 },
      { note: 'E5', time: 14.0, duration: 1.0 },
      { note: 'C5', time: 15.0, duration: 1.0 },
      { note: 'B4', time: 16.0, duration: 1.0 },
      { note: 'A4', time: 17.0, duration: 2.0 },

      { note: 'F5', time: 19.0, duration: 0.5 },
      { note: 'F5', time: 19.5, duration: 0.5 },
      { note: 'E5', time: 20.0, duration: 1.0 },
      { note: 'C5', time: 21.0, duration: 1.0 },
      { note: 'D5', time: 22.0, duration: 1.0 },
      { note: 'C5', time: 23.0, duration: 2.0 }
    ]
  },

 
};
