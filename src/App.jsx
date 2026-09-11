import Settings from './components/Settings'
import Scoreboard from './components/Scoreboard'
import ResetButton from './components/ResetButton'
import GameBoard from './components/GameBoard'
import Graffiti from './components/Graffiti'

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center mb-4'>
        Memory Match Mania
      </h1>

      {/* Settings: lets user choose grid size and restart the game */}

      {/* Scoreboard: shows number of moves, matches, and total pairs */}

      {/* ResetButton: allows resetting the current game */}

      {/* GameBoard: renders the card grid and handles gameplay */}

      {/* Graffiti: shows a celebration when all matches are made */}

    </div>
  )
}

export default App
