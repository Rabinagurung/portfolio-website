import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
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
  );
};

export default SectionWrapper(Tech, "");
