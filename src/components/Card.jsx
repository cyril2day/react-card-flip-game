import { useState, useImperativeHandle, forwardRef } from 'react'

const Card = ({ 
  icon, 
  gridSize,
  onClick
}, ref) => {
  const [flipped, setFlipped] = useState(false)
  
  let baseClass = gridSize === 4
    ? 'text-4xl sm:text-5xl'
    : gridSize === 6
      ? 'text-3xl sm:text-4xl'
      : 'text-2xl sm:text-3xl'

  baseClass = baseClass + 
    ' flex items-center justify-center' +
    ' absolute inset-0' +
    ' border rounded' +
    ' backface-hidden'

    useImperativeHandle(ref, () => ({
      flip: () => setFlipped(true),
      unflip: () => setFlipped(false),
      get flipped () {
        return flipped
      },
      get icon() {
        return icon
      }
    }))

  return (
    <div
      className='w-full h-full cursor-pointer select-none perspective'
      onClick={onClick}
    >
      <div 
        className={`
          relative w-full h-full 
          transition-transform duration-500 transform-style preserve-3d
          ${flipped ? 'rotate-y-180' : ''}
        `}
      >
        {/* Front */}
        <div
          className={`
            ${baseClass} 
            bg-white/70 backdrop-blur-sm border-blue-200
          `}
        >
          ?
        </div>
      
        {/* Back */}
        <div
          className={`
            ${baseClass} 
            bg-blue-400 hover:bg-blue-500 transition-colors duration-300 
            rotate-y-180
          `}
        >
          {icon}
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Card)
