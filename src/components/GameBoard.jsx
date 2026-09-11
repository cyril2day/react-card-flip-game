import { useRef } from 'react'
import Card from './Card'

const GameBoard = ({
  gridSize,
  deck,
  setMoves,
  setMatches
}) => {
  const cardRefs = useRef([])

  const firstCard = useRef(null)

  const secondCard = useRef(null)

  const lockBoard = useRef(false)

  const handleCardClick = (index) => {
    const card = cardRefs.current[index]

    if (!card || card.flipped || lockBoard.current) return 

    card.flip()

    if (!firstCard.current) {
      firstCard.current = card
      return
    }

    secondCard.current = card

    lockBoard.current = true

    setMoves((prev) => prev + 1)

    if (firstCard.current.icon === secondCard.current.icon) {
      firstCard.current = null
      secondCard.current = null

      lockBoard.current = false

      setMatches(prev => {
        if (prev + 1 === deck.length / 2) {
          const audio = new Audio('/sounds/win.mp3')
          audio.play()
        }
        return prev + 1
      })
    } else {
      setTimeout(() => {
        firstCard.current.unflip()
        secondCard.current.unflip()

        firstCard.current = null
        secondCard.current = null

        lockBoard.current = false
      }, 1000)
    }
  }

  return (
    <div 
      className='grid gap-2 h-full'
      style={{
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`
      }}
    >
      {deck.map((icon, idx) => (
        <Card 
          key={idx} 
          icon={icon} 
          ref={(el) => (cardRefs.current[idx] = el)}
          onClick={() => handleCardClick(idx)}
        />       
      ))}
    </div>
  )
}

export default GameBoard
