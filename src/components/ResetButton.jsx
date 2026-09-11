const ResetButton = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className={
        'fixed bottom-4 right-4 z-50' + 
        ' px-4 py-2 text-sm font-medium rounded-full shadow' + 
        ' bg-gradient-to-tr from-blue-400 via-cyan-300 to-white text-blue-900' + 
        ' hover:brightness-105 transition'
      }
    >
      <span
        role='img'
        aria-label='reset'
      >
        🔄
      </span>
    </button>
  )
}

export default ResetButton
