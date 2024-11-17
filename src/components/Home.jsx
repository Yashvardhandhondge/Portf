import { useState } from 'react';
import Particles from '@tsparticles/react';
import Typewriter from 'typewriter-effect';
import { Button } from "@material-tailwind/react";
import { motion } from 'framer-motion';

const Home = () => {
  const [activeNav, setActiveNav] = useState("#");

  // Framer Motion variants for animations
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, staggerChildren: 0.2 } },
  };

  const imgVariant = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const btnVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5} },
  };

  return (
    <section id="home" className="h-[90vh] flex flex-col items-center justify-center p-6 pt-0 md:p-20 xl:items-start font-poppins">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { value: 100 },
            size: { value: 3 },
            color: { value: '#39ff14' },
            links: {
              enable: true,
              color: '#00f5ff',
              distance: 150,
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 2 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 lg:gap-24 mt-4 md:mt-0 xl:gap-72">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left flex flex-col items-center md:items-start"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
          whileInView="visible"
           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#d7d5db]">
            Bringing Your <br /> <span className='text-purple-400'>Designs</span> to Life
          </motion.h1>
          <motion.p 
          whileInView="visible"
          className="pt-6 text-gray-400 text-sm" variants={textVariant}>
            Expert frontend developers specializing in creating high-quality, responsive <br />
            websites from your designs. Fast, pixel-perfect, and fully functional.
          </motion.p>

          {/* Typewriter Effect */}
          <motion.div
          whileInView="visible"
           className="text-sm sm:text-lg mt-5 text-gray-200" variants={textVariant}>
            <Typewriter
              options={{
                strings: [
                  'Figma, XD, PSD to <span class="text-purple-300">HTML, CSS, JS</span>',
                  'Figma, XD, PSD to <span class="text-purple-300">React and Tailwind</span>',
                ],
                autoStart: true,
                loop: true,
                delay: 1,
              }}
            />
          </motion.div>

          <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
            <motion.div variants={btnVariant} whileInView="visible" initial="hidden">
              <Button className="text-black bg-white rounded-full mt-8 hover:bg-purple-400 hover:text-white">
                Hire us
              </Button>
            </motion.div>
          </a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center md:justify-end"
          variants={imgVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="https://i.pinimg.com/736x/7b/20/d5/7b20d5c6cadab61670a2d915263a6b00.jpg"
            className="h-44 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-2xl"
            alt="Design Example"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
