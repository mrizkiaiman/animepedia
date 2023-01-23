import { WithChildren } from '@app/types'
import { motion } from 'framer-motion'

export const PaginationButtonMotion: React.FC<WithChildren> = ({ children }) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 200, damping: 10 }}>
      {children}
    </motion.button>
  )
}

export default PaginationButtonMotion
