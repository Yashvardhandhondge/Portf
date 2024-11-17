import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title with animation */}
        <motion.h2
          className="relative text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#f1f5f966] via-[#f1f5f9] via-51% to-[#f1f5f966] text-transparent bg-clip-text mb-10 before:content-[''] before:absolute before:w-14 md:before:w-64 xl:before:w-96 before:h-[2px] before:bg-gray-400 before:left-[-3rem] md:before:left-[-5rem] before:top-1/2 before:-translate-y-1/2 after:content-[''] after:absolute after:w-14 md:after:w-64 xl:after:w-96 after:h-[2px] after:bg-gray-400 after:right-[-3rem] md:after:right-[-5rem] after:top-1/2 after:-translate-y-1/2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Who We Are
        </motion.h2>

        {/* Description with animation */}
        <motion.p
          className="text-xs md:text-lg text-gray-400 px-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We are a passionate team of 
          <span className="text-purple-300"> Frontend Developers </span>
          specializing in converting Figma, Adobe XD, and other design tools into fully functional and responsive websites. With expertise in 
          <span className="shadow-inner"> HTML, CSS, JavaScript, React, and Tailwind CSS, </span>
          we aim to deliver beautiful, high-performance web pages tailored to your needs.
        </motion.p>

        {/* Team Members with animation */}
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="https://pbs.twimg.com/profile_images/1852061272352919553/pkW1ua9A_400x400.jpg"
              className="h-32 w-32 md:h-44 md:w-44 rounded-full object-cover"
              alt="Karan K."
            />
            <p className="mt-4 font-semibold">Karan K.</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://x.com/Kendre_Karan01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaSquareXTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kendrekaran/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          {/* Yashwardhan */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://pbs.twimg.com/profile_images/1474856894262956032/FZVX9Jxh_400x400.jpg"
              className="h-32 w-32 md:h-44 md:w-44 rounded-full object-cover"
              alt="Yashwardhan D."
            />
            <p className="mt-4 font-semibold">Yashwardhan D.</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://x.com/yashvardhandho3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaSquareXTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/yashvardhan-dhondge-0b9857296/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Mayank */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://pbs.twimg.com/profile_images/1710631195288158209/tuDPc1_g_400x400.jpg"
              className="h-32 w-32 md:h-44 md:w-44 rounded-full object-cover"
              alt="Mayank C."
            />
            <p className="mt-4 font-semibold">Mayank C.</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://x.com/chandratrem91"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaSquareXTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mayankchandratre/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

         
          
        </div>
      </div>
    </section>
  );
};

export default About;
