import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 max-w-7xl mx-auto">
      <div className="w-full">
        <h1>
          <span className="text-3xl md:text-5xl font-semibold">Learn</span>
          <br />{" "}
          <span className="text-orange-500 text-5xl md:text-7xl font-bold pt-2">
            <Typewriter
              words={[
                "React.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Tailwind",
                "MERN Stack",
                "Next.js",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="text-[18px] pt-2">
          Master the fundamental of web development with our interactive
          courses.
        </p>
        <BrowseCourses></BrowseCourses>
      </div>
      <div className="w-11/12 md:w-full">
        <AutoPlaySlider></AutoPlaySlider>
      </div>
    </div>
  );
};

export default Banner;
