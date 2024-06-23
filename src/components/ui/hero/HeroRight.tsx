import Image from "next/image";
import React from "react";

const HeroRight = () => {
  return (
    <div className="mb-12 flex w-full md:mb-16 lg:w-1/2">
      <div className="relative left-2 top-12 z-10 ml-2 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-6 md:top-10 lg:ml-0">
        <Image
          src="/hero/MODEL.avif"
          alt="Hero"
          className="h-full w-full object-cover object-center"
          priority
          width={500}
          height={500}
        />
      </div>
      <div className=" h-full w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
        <Image
          src="/hero/MODEL1.avif"
          alt="Hero"
          className="h-full w-full object-cover object-center"
          priority
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default HeroRight;
