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
        <span className='absolute whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white'>
          {text}
        </span>
      )}
    </div>
  )
}

export default Tooltip
