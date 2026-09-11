# Memory Match Mania

A memory matching game for the browser. Flip two cards at a time and try to find every matching pair. The game is written in React.

## How to Play

Select a grid size of 4x4, 6x6, or 8x8. A larger grid has more cards, so the game becomes harder.

Click a card to reveal its emoji. Click a second card to find the matching pair. If the two cards match, they stay face up. If they do not match, they turn back over after a short pause.

One move is counted for each pair of cards you open. The scoreboard shows the number of moves and the progress of your matches. When every pair is matched, a win message appears and a victory sound plays.

## Features

- Three grid sizes, from 16 to 64 cards
- Cards flip in three dimensions using CSS transforms
- Sound effects for card flips and for winning the game
- A scoreboard that tracks moves and matched pairs
- A floating button to reset the current game
- A board that locks while two cards are compared, so extra clicks do not interfere
- A layout that adjusts to different screen sizes
- A simple, colorful interface styled with Tailwind CSS

## Tech Stack

- React 19, with function components and hooks
- Vite 8 as the build tool
- Tailwind CSS 4 for styling
- Emoji characters as card icons, drawn from a shared set
- Audio files for the flip and victory sounds
- Oxlint for code checks

The project uses no UI library and no state management framework. Everything relies on React and the browser platform.

## React Concepts in This Project

The project is small, but it covers several patterns that are common in React apps.

### State management with hooks

- useState with lazy initialization. The card deck is created only on the first render, so the shuffle does not repeat on every update. See src/App.jsx.
- State is lifted up. Moves, matches, the deck, and the grid size live in the App component and flow down to the child components as props.
- Conditional rendering. The win banner is rendered only when the number of matches equals half of the deck.
- Remounting through the key prop. The GameBoard component receives a new key when the game resets, so it starts fresh with no leftover card state.

### Refs and imperative functions

- useRef holds the first card, the second card, and a board lock flag. These values change quickly during a turn, so they do not need to trigger a re-render.
- forwardRef and useImperativeHandle let Card expose flip, unflip, and read access to its own state. The board uses these functions to compare two opened cards. See src/components/Card.jsx.

### Code organization

- The interface is divided into small components with one job each: GameBoard, Card, Scoreboard, Settings, ResetButton, and Graffiti.
- Utility functions live in separate files. shuffleDeck implements the Fisher and Yates algorithm, which gives fair randomization.
- The flip sound is guarded by a module level flag and requestAnimationFrame, so rapid clicks do not cause overlapping audio.
- The app runs inside StrictMode, which helps surface problems during development.

## Project Structure

```
src/
├── main.jsx                  # Entry point, creates the root and wraps the app in StrictMode
├── App.jsx                   # Top level game state and orchestration
├── index.css                 # Tailwind import and 3D transform utilities
├── components/
│   ├── GameBoard.jsx         # Card grid layout and match logic
│   ├── Card.jsx              # Single flip card with forwardRef and useImperativeHandle
│   ├── Scoreboard.jsx        # Moves and matches display
│   ├── Settings.jsx          # Grid size selector
│   ├── ResetButton.jsx       # Floating reset control
│   └── Graffiti.jsx          # Win celebration overlay
└── utils/
    ├── generateIcons.js      # Random selection of emoji icons
    ├── shuffleDeck.js        # Shuffling of the deck
    └── playFlipSoundOnce.js  # Flip sound with a guard against overlap
```

## License

MIT
