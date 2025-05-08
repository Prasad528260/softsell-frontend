import { motion } from "framer-motion";
import heroBg from '../assets/image (3).jpg';


const Hero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative flex items-center justify-center h-screen w-full bg-gradient-to-br from-[#232046] via-[#18181b] to-[#1e293b] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={heroBg}
          alt="SoftSell hero background"
          className="w-full h-full object-cover object-center select-none"
          draggable="false"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
      
      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Content */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="text-center max-w-4xl space-y-8">
          <motion.h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white" variants={container}>
            <motion.span className="block" variants={item}>
              Sell Your 
            </motion.span>
            <motion.span 
              className=" text-cyan-400"
              variants={item}
            >
             Unused Software Licenses
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-medium text-blue-100 max-w-3xl mx-auto"
            variants={item}
          >
            Turn your surplus software into cash quickly, securely, and easily with SoftSell.
          </motion.p>
          
          <motion.div variants={item}>
            <motion.a
              href="#contact"
              className="bg-cyan-400 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-xl shadow-xl transition-all duration-300 mt-6 text-base ring-0 hover:ring-4 hover:ring-cyan-400/40 focus:ring-4 focus:ring-cyan-400/40 inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Sell your license
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;