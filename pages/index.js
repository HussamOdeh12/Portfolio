import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/75 h-screen">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h2
            className="h2 uppercase pt-0 lg:pt-16 z-10"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            hey there! <br /> i&apos;m{" "}
            <span className="text-accent uppercase">hussam odeh</span>
          </motion.h2>
          {/* subtitle */}
          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-sm z-10"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Full-Stack Web Developer, eager to create impactful web
            applications. Dedicated to learning and growing in the field, with a
            focus on delivering clean and efficient code. Passionate about
            leveraging JavaScript to build engaging and responsive websites.
          </motion.p>
          {/* button */}
          <motion.div
            className="hidden xl:flex z-10"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
