import uploadIcon from '../assets/upload.svg';
import valuationIcon from '../assets/valuation.svg';
import paidIcon from '../assets/paid.svg';

const steps = [
  {
    icon: uploadIcon,
    title: 'Upload License',
    desc: 'Easily upload details of your unused software license with our simple form.'
  },
  {
    icon: valuationIcon,
    title: 'Get Valuation',
    desc: 'We quickly assess your license and give you a fair market quote.'
  },
  {
    icon: paidIcon,
    title: 'Get Paid',
    desc: 'Accept the offer and receive instant payment. No hassles, no delays.'
  }
];

import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const HowItWorks = () => (
  <motion.section
  className="py-20 px-4 md:px-0 max-w-6xl mx-auto"
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.3 }}
  variants={container}
>
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-4xl md:text-5xl font-extrabold text-white mb-14 text-center tracking-tight"
    >
      How It Works
    </motion.h2>
    <motion.div
      className="flex flex-wrap lg:flex-nowrap lg:justify-between justify-center gap-10 lg:gap-8 max-w-6xl mx-auto"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center bg-gradient-to-br from-[#232046] via-[#18181b] to-[#1e293b] rounded-3xl shadow-xl p-10 w-full max-w-xs min-h-[340px] border-2 border-cyan-400 hover:border-violet-400 transition-all duration-300"
          variants={item}
          whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0,255,255,0.2)' }}
          whileTap={{ scale: 0.98 }}
        >
          <img src={step.icon} alt={step.title} className="w-24 h-24 mb-8 shadow-lg ring-4 ring-cyan-400/30 rounded-full border-2 border-cyan-400" />
          <div className="text-lg md:text-xl font-bold text-cyan-300 mb-3 text-center">{step.title}</div>
          <div className="text-lg text-gray-300 text-center">{step.desc}</div>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);


export default HowItWorks;
