import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        className="relative w-[110px] h-[110px] flex justify-center items-center
        bg-circleStar bg-cover bg-center bg-no-repeat group"
        href={"/work"}
      >
        <Image
          className="animate-spin-slow w-full h-full max-w-[80px] max-h-[80px]"
          src={"/rounded-text.png"}
          width={80}
          height={80}
          alt=""
        />
        <HiArrowRight className="absolute text-3xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
