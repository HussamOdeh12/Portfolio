/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const ProjectsBlog = () => {
  return (
    <>
      <section className="pb-10">
        <div className="container">
          <div className="flex flex-wrap -mx-4 bg-black/25 p-4 rounded-xl z-10">
            <BlogCard
              live="Live Demo"
              repo="Code"
              CardTitle="Cyborg Gaming Page"
              CardDescription="Simple one page using React.js"
              image="/cyborg_pic.svg"
              demo="https://hussamodeh12.github.io/cyborg-gaming/"
              source="https://github.com/HussamOdeh12/cyborg-gaming"
            />
            <BlogCard
              live="Live Demo"
              repo="Code"
              CardTitle="RedStore Website"
              CardDescription="Created this website using HTML,CSS, and JavaScript, which is a website for selling clothes"
              image="/redstore_pic.svg"
              demo="https://hussamodeh12.github.io/RedStore/"
              source="https://github.com/HussamOdeh12/RedStore"
            />
            <BlogCard
              live="Live Demo"
              repo="Code"
              CardTitle="Nike Max"
              CardDescription="One landing page for the Nike shoes website, using Bootstrap 5"
              image="/max_pic.svg"
              demo="https://hussamodeh12.github.io/Max/"
              source="https://github.com/HussamOdeh12/Max"
            />
            <BlogCard
              live="Live Demo"
              repo="Code"
              CardTitle="World Template"
              CardDescription="This template is designed using only HTML and CSS"
              image="/world_pic.svg"
              demo="https://hussamodeh12.github.io/World_Template/"
              source="https://github.com/HussamOdeh12/World_Template"
            />
            <BlogCard
              live="Live Demo"
              repo="Code"
              CardTitle="FromScratch Website"
              CardDescription="As the name indicates this website was built from scratch using JavaScript
              with some features such as the ability to change colors, background, etc"
              image="/scratch_pic.svg"
              demo="https://hussamodeh12.github.io/FromScratch/"
              source="https://github.com/HussamOdeh12/FromScratch"
            />
            <BlogCard
              live="Live Demo"
              repo="Code"
              CardTitle="Eduford University"
              CardDescription="University website using HTML, CSS, and JavaScript"
              image="/eduford_pic.svg"
              demo="https://hussamodeh12.github.io/Eduford/"
              source="https://github.com/HussamOdeh12/Eduford"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const BlogCard = ({
  image,
  live,
  repo,
  CardTitle,
  CardDescription,
  demo,
  source,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 z-10">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-4 overflow-hidden rounded-xl bg-accent/20 hover:bg-accent/80 transition-all duration-300">
            <Image
              src={image}
              alt=""
              className="w-full p-1 rounded-2xl"
              width={500}
              height={300}
            />
          </div>
          <div>
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {live && (
                <Link
                  href={demo}
                  target="_blank"
                  className="btn text-xs rounded-xl border border-white/50 w-[100%] lg:max-w-[48%] mb-4 
                  transition-all duration-300 flex items-center justify-center overflow-hidden
                  hover:border-accent/75 hover:bg-accent/75 hover:text-black/75 group"
                >
                  <button>
                    <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                      {live}
                    </span>
                    <BsArrowRight
                      className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-5 group-hover:translate-x-5
                    group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                    />
                  </button>
                </Link>
              )}
              {repo && (
                <Link
                  href={source}
                  target="_blank"
                  className="btn text-xs rounded-xl border border-white/50 w-[100%] lg:max-w-[48%] mb-4 transition-all
            duration-300 flex items-center justify-center overflow-hidden 
            hover:border-accent/75 hover:bg-accent/75 hover:text-black/75 group"
                >
                  <button>
                    <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                      {repo}
                    </span>
                    <BsArrowRight
                      className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-5 group-hover:translate-x-1
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                    />
                  </button>
                </Link>
              )}
            </div>
            <h3>
              <p className="flex items-start justify-center mb-4 text-lg md:text-xl font-semibold text-center text-white leading-tight">
                {CardTitle}
              </p>
            </h3>
            <p className="text-xs md:text-sm mb-4 mx-auto lg:mx-0 text-center leading-tight">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsBlog;
