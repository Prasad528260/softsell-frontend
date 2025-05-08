import manImg from '../assets/man.jpg';
import womanImg from '../assets/woman.jpg';

const reviews = [
  {
    img: womanImg,
    name: 'Priya Sharma',
    role: 'IT Manager',
    company: 'TechNova',
    text: 'SoftSell made selling our unused licenses effortless. The process was fast and the payout was better than expected!'
  },
  {
    img: manImg,
    name: 'John Lee',
    role: 'Procurement Lead',
    company: 'InnoSoft',
    text: 'Professional team and smooth experience. Highly recommended for anyone looking to monetize surplus software.'
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

const Reviews = () => (
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
      Customer Reviews
    </motion.h2>
    <motion.div
      className="flex flex-wrap gap-10 justify-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {reviews.map((review, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center bg-gradient-to-br from-[#232046] via-[#18181b] to-[#1e293b] rounded-3xl shadow-xl p-10 w-full max-w-xs min-h-[340px] border-2 border-cyan-400 hover:border-violet-400 transition-all duration-300"
          variants={item}
          whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0,255,255,0.2)' }}
          whileTap={{ scale: 0.98 }}
        >
          <img src={review.img} alt={review.name} className="w-24 h-24 mb-8 rounded-full object-cover shadow-lg ring-4 ring-cyan-400/30" />
          <div className="text-2xl md:text-3xl font-bold text-cyan-300 mb-3 text-center">{review.name}</div>
          <div className="text-lg text-violet-400 mb-2 text-center">{review.role}</div>
          <div className="text-base text-gray-400 mb-2 text-center">{review.company}</div>
          <div className="text-lg text-gray-300 text-center italic">&ldquo;{review.text}&rdquo;</div>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);


export default Reviews;
