import { useState } from 'react';
import { motion } from 'framer-motion';


const licenseTypes = [
  'Windows',  
  'Microsoft Office',
  'Adobe Suite',
  'Antivirus',
  'Other'
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Invalid email.';
    if (!form.licenseType) newErrors.licenseType = 'Select a license type.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: '', email: '', company: '', licenseType: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 md:px-0 max-w-xl mx-auto"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-14 text-center tracking-tight"
      >
        Contact Us
      </motion.h2>
      <motion.form
        className="bg-gradient-to-br from-[#232046] via-[#18181b] to-[#1e293b] border border-violet-700 hover:border-cyan-400 rounded-3xl shadow-2xl p-6 flex flex-col gap-5 max-w-md mx-auto transition-all duration-300"
        onSubmit={handleSubmit}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.input
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-[#232046] text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-400 rounded-xl px-5 py-4 text-base md:text-lg font-medium placeholder-white transition-all duration-300"
          type="text"
          name="name"
          placeholder="Name*"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <div className="text-red-600 text-sm -mt-2 mb-1">{errors.name}</div>}

        <motion.input variants={item}
          className="bg-[#232046] text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-400 rounded-xl px-5 py-4 text-base md:text-lg font-medium placeholder-white transition-all duration-300"
          type="email"
          name="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div className="text-red-600 text-sm -mt-2 mb-1">{errors.email}</div>}

        <motion.input variants={item}
          className="bg-[#232046] text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-400 rounded-xl px-5 py-4 text-base md:text-lg font-medium placeholder-white transition-all duration-300"
          type="text"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
        />

        <motion.select variants={item}
          className="bg-[#232046] text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-400 rounded-xl px-5 py-4 text-base md:text-lg font-medium placeholder-white transition-all duration-300"
          name="licenseType"
          value={form.licenseType}
          onChange={handleChange}
        >
          <option value="">Select License Type*</option>
          {licenseTypes.map((type, i) => (
            <option key={i} value={type}>{type}</option>
          ))}
        </motion.select>
        {errors.licenseType && <div className="text-red-600 text-sm -mt-2 mb-1">{errors.licenseType}</div>}

        <motion.textarea variants={item}
          className="bg-[#232046] text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-400 rounded-xl px-5 py-4 text-base md:text-lg font-medium placeholder-white transition-all duration-300"
          name="message"
          placeholder="Message*"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <div className="text-red-600 text-sm -mt-2 mb-1">{errors.message}</div>}

        <motion.button
          className="bg-cyan-400 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 mt-4 w-full md:w-auto"
          type="submit"
          whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(0,255,255,0.25)' }}
          whileTap={{ scale: 0.96 }}
          variants={item}
        >
          Send
        </motion.button>
        {submitted && <div className="text-green-600 mt-2">Thank you! We received your message.</div>}
      </motion.form>
    </motion.section>
  );
};

export default ContactForm;
