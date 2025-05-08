import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Reviews from './components/Reviews.jsx';
import ContactForm from './components/ContactForm.jsx';


const sectionVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2
    }
  }
};

function App() {
  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.div
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Navbar />
      </motion.div>
      <motion.section variants={sectionVariants}>
        <Hero />
      </motion.section>
      <motion.section variants={sectionVariants}>
        <HowItWorks />
      </motion.section>
      <motion.section variants={sectionVariants}>
        <WhyChooseUs />
      </motion.section>
      <motion.section variants={sectionVariants}>
        <Reviews />
      </motion.section>
      <motion.section variants={sectionVariants}>
        <ContactForm />
      </motion.section>
    </motion.div>
  );
}

export default App;
