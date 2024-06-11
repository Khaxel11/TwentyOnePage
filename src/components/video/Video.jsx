import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { Carousel } from './../carousel/Carousel'
import './video.scss';

const Video = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className='video'>
      <motion.span className="watch-now"
    //   animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
    //   transition={{ duration: 0.5 }}
        // whileHover={{ scale: 1.1 }}
      >WATCH NOW</motion.span>
       {/* <Carousel /> */}
      {/* <motion.img
        src="./public/lazyVideo.jpg"
        alt="over_"
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        
      /> */}
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/53tgVlXBZVg?si=UT0mnwNH_0G_yuU2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  );
};

export default Video;
