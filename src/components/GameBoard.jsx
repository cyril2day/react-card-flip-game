import Card from './Card'

const GameBoard = ({
  gridSize,
  deck,
  setMoves,
  setMatches
}) => {
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
          gridSize={gridSize}
        />       
      ))}
    </div>
  )
}

export default GameBoard
