import React from 'react'
import HtmlIcon from '../icons/HtmlIcon'
import CssIcon from '../icons/CssIcon'
import JsIcon from '../icons/JsIcon'
import TypeScript from '../icons/TypeScript'
import ReactIcon from '../icons/ReactIcon'
import Tailwind from '../icons/Tailwind'
import Nodejs from '../icons/Nodejs'
import { Tooltip } from '@mui/material'
import { motion } from 'framer-motion'

const TechIcons = ({ isDarkMode }) => {
  const iconData = [
    { icon: HtmlIcon, tooltip: 'HTML5', anchorId: null },
    { icon: CssIcon, tooltip: 'CSS3', anchorId: null },
    { icon: JsIcon, tooltip: 'JavaScript', anchorId: null },
    { icon: TypeScript, tooltip: 'TypeScript', anchorId: 'about-anchor' },
    { icon: ReactIcon, tooltip: 'React', anchorId: null, isDarkMode },
    { icon: Tailwind, tooltip: 'Tailwind', anchorId: null },
    { icon: Nodejs, tooltip: 'Node', anchorId: null }
  ]

  return (
    <div className='flex items-center gap-3 pt-1 lg:pl-4 lg:pt-0'>
      {iconData.map(({ icon: Icon, tooltip, anchorId, ...rest }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
        >
          <Tooltip title={tooltip}>
            <span role='img' aria-label={`${tooltip} Icon`} id={anchorId}>
              <Icon {...rest} />
            </span>
          </Tooltip>
        </motion.div>
      ))}
    </div>
  )
}

export default TechIcons
