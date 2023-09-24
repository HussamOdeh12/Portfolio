import ProjectBlogs from "../../components/ProjectsBlog";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Projects = () => {
  return (
    <div className="h-fit bg-primary/75 py-32 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left xl:mb-0 z-10">
            <motion.h2
              className="h2 text-center"
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              My <span className="text-accent">Projects.</span>
            </motion.h2>
            <motion.p
              className="text-xs md:text-sm mb-6 mx-auto lg:mx-0 text-center"
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Welcome to my projects page. Here, I showcase my portfolio of
              work, highlighting my expertise in Full Stack Web Development.
            </motion.p>
          </div>
          {/* Projects */}
          <motion.div
            className="max-w-[85%]"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectBlogs />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
