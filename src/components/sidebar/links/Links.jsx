import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5 },
  },
};

const Links = ({ open }) => {
  const items = ["Home", "About", "Discography", "Lore"];

  return (
    <motion.div
      className="links"
      variants={variants}
      initial="closed"
      animate={open ? "open" : "closed"}
    >
      {items.map((item) => (
        <motion.div key={item} variants={itemVariants}>
          <motion.a
            href={`#${item}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}
          </motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
