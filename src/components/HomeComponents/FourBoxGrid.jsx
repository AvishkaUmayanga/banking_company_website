import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import IconTitle from './IconTitle';

const FourBoxGrid = ({ icon1, title1, icon2, title2, icon3, title3, icon4, title4 }) => {
  const controls = useAnimation();

  useEffect(() => {
    let animationCancelled = false;
    
    const animation = async () => {
      while (!animationCancelled) {
        await controls.start({ y: [10, -10, 10], transition: { duration: 3 } });
      }
    };

    animation();
    return () => {
      animationCancelled = true;
    };
  }, [controls])

  return (
    <motion.div
      className='lg:w-[500px] bg-lighterGray flex justify-center xl:p-10 rounded-lg lg:p-8 md:w-[350px] p-4 max-xs:p-2 h-max'
      animate={controls}
    >
      <div className='grid grid-cols-2 gap-4 max-xs:gap-2'>
        <IconTitle icon={icon1} title={title1} />
        <IconTitle icon={icon2} title={title2} />
        <IconTitle icon={icon3} title={title3} />
        <IconTitle icon={icon4} title={title4} />
      </div>
    </motion.div>
  );
};

export default FourBoxGrid;
