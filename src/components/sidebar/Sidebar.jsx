import { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';
import './sidebar.scss';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <motion.div
        className='sidebar'
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={variants}
      >
        <motion.div className="bg">
          <Links open={open} />
        </motion.div>
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </>
  );
};

export default Sidebar;
