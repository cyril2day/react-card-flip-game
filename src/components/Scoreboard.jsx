const Scoreboard = ({
  moves,
  matches,
  total
}) => {
  return (
    <div className='mb-4 flex justify-between text-lg'>
      <span>Moves: {moves}</span>
      <span>
        Matches: {matches}/{total}
      </span>
    </div>
  )
}

export default Scoreboard
