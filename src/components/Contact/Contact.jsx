import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axbtt7a",  // Replace with your EmailJS Service ID
        "template_1ziboq3",  // Replace with your EmailJS Template ID
        form.current,
        "Rz7W9pVF0HdDryNNL"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-[7vw] lg:px-[10vw] relative bg-[#0f0f1a] overflow-hidden font-sans"
    >
      <ToastContainer />
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">ME</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative z-10"
      >
        {/* Left Column: Contact Info Cards */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          {/* Email Card */}
          <div className="group bg-[#1a1a2e]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] flex flex-col justify-center h-full">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#8245ec] to-[#d946ef] flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Email</h4>
                <a href="mailto:aleenamalik12354@gmail.com" className="text-white font-medium text-lg hover:text-[#d946ef] transition-colors">
                  aleenamalik12354@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group bg-[#1a1a2e]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] flex flex-col justify-center h-full">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#8245ec] to-[#d946ef] flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Location</h4>
                <p className="text-white font-medium text-lg">Wah Cantt, Pakistan</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Middle Column: Contact Form */}
        <motion.div variants={itemVariants} className="bg-[#1a1a2e]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            Send a Message <span className="text-2xl animate-bounce">🚀</span>
          </h3>
          
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full bg-[#110f24] text-white p-4 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all placeholder-gray-500 font-medium"
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full bg-[#110f24] text-white p-4 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all placeholder-gray-500 font-medium"
              />
            </div>
             <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-[#110f24] text-white p-4 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all placeholder-gray-500 font-medium"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full bg-[#110f24] text-white p-4 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none placeholder-gray-500 font-medium"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[#8245ec] to-[#d946ef] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2 group"
            >
              Send Message 
              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>

        {/* Right Column: Map */}
        <motion.div variants={itemVariants} className="h-full min-h-[400px] lg:min-h-auto bg-[#1a1a2e]/60 backdrop-blur-xl p-2 rounded-2xl border border-white/5 shadow-xl">
          <div className="w-full h-full rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 relative">
             <iframe 
               title="Wah Cantt Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106303.49253457016!2d72.64817757913596!3d33.78261895745771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa44225d3c6c9%3A0x8670c5385611dfd3!2sWah%20Cantt%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1717765123456!5m2!1sen!2s" 
               width="100%" 
               height="100%" 
               style={{ border: 0, minHeight: "100%" }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg pointer-events-none">
                📍 Find Me Here
             </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Contact;
