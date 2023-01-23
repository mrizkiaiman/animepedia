import { WithChildren } from '@app/types'
import { motion } from 'framer-motion'

interface NavbarButtonMotionProps extends WithChildren {
  whileHoverScale?: number
  whileTapScale?: number | undefined
}

export const NavbarButtonMotion: React.FC<NavbarButtonMotionProps> = ({ children, whileHoverScale, whileTapScale }) => {
  return (
    <motion.button
      whileHover={{ scale: whileHoverScale ? whileHoverScale : 1.1 }}
      whileTap={{ scale: whileTapScale ? whileTapScale : 0.9 }}>
      {children}
    </motion.button>
  )
}

export default NavbarButtonMotion
