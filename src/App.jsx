import Settings from './components/Settings'
import Scoreboard from './components/Scoreboard'
import ResetButton from './components/ResetButton'
import GameBoard from './components/GameBoard'
import Graffiti from './components/Graffiti'
import { useState } from 'react'
import generateIcons from './utils/generateIcons'
import shuffleDeck from './utils/shuffleDeck'

const App = () => {
  const [gridSize, setGridSize] = useState(4)

  const createNewDeck = (size) => {
    const iconCount = (size * size) / 2

    const icons = generateIcons(iconCount)

    const newDeck = [...icons, ...icons]

    return shuffleDeck(newDeck)
  }

  const [deck, setDeck] = useState(() => createNewDeck(4))

  const [moves, setMoves] = useState(0)

  const [matches, setMatches] = useState(0)

  const [resetCounter, setResetCounter] = useState(0)

  const reInitializeGame = (size) => {
    setGridSize(size)

    setDeck(createNewDeck(size))

    setMoves(0)

    setMatches(0)

    setResetCounter(prev => prev + 1)
  }

  return (
    <div className='h-screen flex flex-col p-4 max-w-screen-md mx-auto bg-gradient-to-bl from-cyan-100 via-blue-50 to-white'>
      <h1 className='text-3xl font-bold text-center mb-4'>
        Memory Match Mania
      </h1>

      {/* Settings: lets user choose grid size and restart the game */}
      <Settings onGridChange={reInitializeGame} />

      {/* Scoreboard: shows number of moves, matches, and total pairs */}
      <Scoreboard 
        moves={moves}
        matches={matches}
        total={deck.length / 2}
      />

      {/* ResetButton: allows resetting the current game */}
      <ResetButton onReset={() => reInitializeGame(gridSize)} />

      {/* GameBoard: renders the card grid and handles gameplay */}
      <div className='flex-grow'>
        <GameBoard
          key={resetCounter}
          gridSize={gridSize}
          deck={deck}
          setMoves={setMoves}
          setMatches={setMatches}
        />
      </div>

      {/* Graffiti: shows a celebration when all matches are made */}
      {matches === deck.length / 2 && <Graffiti />}

    </div>
  )
}

export default App
