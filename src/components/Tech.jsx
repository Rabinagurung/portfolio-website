import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I use</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div
            className='flex h-28 w-28 items-center justify-center rounded-full bg-[#f3f0e8] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
            key={technology.name}
            title={technology.name}
            aria-label={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='h-full w-full object-contain'
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
