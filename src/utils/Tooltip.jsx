import { useState } from 'react'

const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false)

  const handleMouseEnter = () => {
    setVisible(true)
  }

  const handleMouseLeave = () => {
    setVisible(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative'
    >
      {children}
      {visible && (
        <span className='absolute bg-gray-800 text-white text-sm py-1 px-2 rounded whitespace-nowrap'>
          {text}
        </span>
      )}
    </div>
  )
}

export default Tooltip
