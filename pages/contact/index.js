import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { successNotify } from "../../components/Notify";
import { ToastContainer } from "react-toastify";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          successNotify();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="page bg-primary/75">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] z-10">
          {/* text */}
          <motion.h2
            className="h2 text-center mb-4 mt-12"
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.p
            className="text-xs md:text-sm text-center mb-4"
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            I&apos;m eager to engage with you. Whether it&apos;s for projects,
            collaborations, or just a friendly chat, I&apos;m here. Let&apos;s
            connect and explore opportunities!
          </motion.p>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col items-center md:items-start gap-2 w-full mx-auto"
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                className="input border border-white/50"
                type="text"
                placeholder="name"
                name="user_name"
              />
              <input
                className="input border border-white/50"
                type="text"
                placeholder="email"
                name="user_email"
              />
            </div>
            <input
              className="input border border-white/50"
              type="text"
              placeholder="subject"
              name="subject"
            />
            <textarea
              className="textarea border border-white/50"
              placeholder="message"
              name="message"
            ></textarea>
            <button
              className="btn text-sm rounded-xl border border-white/50 w-[240px] md:max-w-[140px] px-8 transition-all
            duration-300 flex items-center justify-center overflow-hidden hover:border-accent/75 hover:bg-accent/75 hover:text-black/75 group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
      <ToastContainer newestOnTop={true} rtl={false} pauseOnFocusLoss={false} />
    </div>
  );
};

export default Contact;
