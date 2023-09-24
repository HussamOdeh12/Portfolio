/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaArrowCircleDown,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaSass />,
          <FaJs />,
          <FaReact />,
          <FaNodeJs />,
          <SiExpress />,
          <SiMongodb />,
          <SiBootstrap />,
          <SiTailwindcss />,
          <SiGit />,
          <SiGithub />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "contests",
    info: [
      {
        title: "One million jordanian coders",
        desc: "Achieved a placement among the top ten participants in the Programming Communities Competition of the One Million Jordanian Programmers initiative.",
        stage: "Jun 2022 - Apr 2023",
      },
      {
        title: "ITSAF",
        desc: "ITSAF, is an annual event that brings together talented and innovative information Technology (IT) students from various educational.",
        stage: "2022",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Aspire Epic Academy",
        desc: "Completed a comprehensive 3-month training program with Aspire, focusing on Full-Stack JavaScript development.",
        stage: "Apr 2023 - Jul 2023",
      },
      {
        title: "EFE Jordan",
        desc: "Completed a 40-hour training course on Web Development and Design provided by Education for Employment - Jordan.",
        stage: "Mar 2023 - Apr 2023",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Internet Technology",
        subtitle: "Zarqa University, Zarqa, Jordan",
        desc: "Achieved first place position in my university cohort while earning an excellent degree with a GPA of 84.3.",
        stage: "Sep 2018 – Jul 2022",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-fit lg:page bg-primary/75 flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* text */}
        <div className="pt-32 lg:pt-0 flex-1 flex flex-col justify-center text-center z-10">
          <motion.h2
            className="h2"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <span className="text-accent">Discover</span> more about me.
          </motion.h2>
          <motion.p
            className="text-xs md:text-sm mb-4"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Explore more about my skills, experiences, and education to discover
            how I can bring value to your projects.
          </motion.p>
        </div>
        {/* info */}
        <motion.div
          className="flex flex-col w-full xl:max-w-[53%] h-[500px] lg:h-[300px] items-center z-10"
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div
            className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative 
                  after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 text-xs md:text-lg`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </motion.div>
          <motion.div
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center justify-center"
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col max-w-max gap-x-2 items-center font-light text-white/70 z-10"
                >
                  {/* title */}
                  <div className="text-white text-xs md:text-sm">
                    - {item.title} -
                  </div>
                  <div className="text-white mb-3 text-xs md:text-sm">
                    {item.subtitle}
                  </div>
                  <div className="text-accent mb-3">
                    <FaArrowCircleDown />
                  </div>
                  <div className="text-xs md:text-sm">{item.stage}</div>
                  <div className="text-xs md:text-sm max-w-[450px] text-center">
                    {item.desc}
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-3 items-center justify-center">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
