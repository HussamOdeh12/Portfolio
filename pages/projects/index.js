import ProjectBlogs from "../../components/ProjectsBlog";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ParticlesContainer from "../../components/ParticlesContainer";

const Projects = () => {
  return (
    <div className="h-[100%] lg:h-[100vh] bg-primary/75 pt-32 lg:pt-48 overflow-hidden flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left xl:mb-0 z-10">
            <motion.h2
              className="h2 text-center"
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              My <span className="text-accent">Projects.</span>
            </motion.h2>
            <motion.p
              className="text-xs md:text-sm mb-4 mx-auto lg:mx-0 text-center"
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Welcome to my projects page. Here, I showcase my portfolio of
              work, highlighting my expertise in Full Stack Web Development.
            </motion.p>
          </div>
          {/* Projects */}
          <div className="max-w-[100%] lg:max-w-[75%] mb-12">
            <ProjectBlogs />
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Projects;
