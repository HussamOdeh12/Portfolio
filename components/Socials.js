import Link from "next/link";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiBehanceFill,
  RiDribbbleFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div
      className="flex items-center gap-x-2 lg:gap-x-4 text-2xl  bg-white/10 
      backdrop-blur-md rounded-xl px-4 py-2"
    >
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/hussam-odeh/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        target="_blank"
        href={"https://github.com/HussamOdeh12"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        target="_blank"
        href={"https://www.facebook.com/hussam.odeh.5/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookFill />
      </Link>
      <Link
        target="_blank"
        href={"https://www.instagram.com/hussam_odeh9/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramFill />
      </Link>
      <Link
        target="_blank"
        href={"https://www.behance.net/hussamodeh2"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiBehanceFill />
      </Link>
      <Link
        target="_blank"
        href={"https://dribbble.com/HussamOdeh12"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiDribbbleFill />
      </Link>
      <div> | </div>
      <Link
        target="_blank"
        href={"https://flowcv.com/resume/dok2182n94"}
        className="hover:text-accent transition-all duration-300 text-sm"
      >
        CV
      </Link>
    </div>
  );
};

export default Socials;
