// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();

//     const csvContent = `Name,Email,Message\n"${formData.name}","${formData.email}","${formData.message}"`;
//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'contact-message.csv';
//     link.click();

//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000); // hide after 3s

//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="relative max-w-lg mx-auto">
//       <form className="space-y-6" onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 transition-colors cursor-pointer"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 transition-colors cursor-pointer"
//             required
//           />
//         </div>
//         <div>
//           <textarea
//             rows={5}
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 resize-none transition-colors cursor-pointer"
//             required
//           />
//         </div>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           type="submit"
//           className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 cursor-pointer"
//         >
//           Send Message
//         </motion.button>
//       </form>

//       {/* ✅ Success Popup with Animation */}
//       <AnimatePresence>
//         {showPopup && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 mt-4 rounded-lg shadow-lg z-50"
//           >
//             Message sent successfully!
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ContactForm;


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'react-feather'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfxAiviYfcmat91wBZEKUQIoZ9LeMhvEcR9quWGu_WeDVopGg/formResponse";

//     try {
//       // Replace with your own Google Form action URL
//       const formURL = 'https://script.google.com/macros/s/AKfycbweTFI_9-GwTCpDWg4Gn2_LzJn6ln9CyPfrDYvKXgVeX8mx0F_NCFHj5UwpYh-1AWN83A/exec';

//       const formBody = new URLSearchParams();
//       formBody.append('entry.YOUR_NAME_ENTRY_ID', formData.name);
//       formBody.append('entry.YOUR_EMAIL_ENTRY_ID', formData.email);
//       formBody.append('entry.YOUR_MESSAGE_ENTRY_ID', formData.message);

//       await fetch(formURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     });

//       // Show success toast
//       setShowPopup(true);
//       setTimeout(() => setShowPopup(false), 3000);

//       // Reset form
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       alert('Something went wrong. Try again later.');
//       console.error(error);
//     }
//   };


  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfxAiviYfcmat91wBZEKUQIoZ9LeMhvEcR9quWGu_WeDVopGg/formResponse";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formBody = new URLSearchParams();
  formBody.append("entry.1583533233", formData.name);    // Name
  formBody.append("entry.151358687", formData.email);    // Email
  formBody.append("entry.438993126", formData.message);  // Message

  await fetch(GOOGLE_FORM_ACTION_URL, {
    method: "POST",
    mode: "no-cors", // Prevents CORS error
    body: formBody,
  });

  setShowPopup(true);
  setTimeout(() => setShowPopup(false), 3000);
  setFormData({ name: "", email: "", message: "" });
};

  return (
    <div className="relative max-w-lg mx-auto">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400"
          required
        />
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 resize-none"
          required
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 cursor-pointer"
        >
          Send Message
        </motion.button>
      </form>

      {/* ✅ Toast Notification */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
          >
            <CheckCircle className="w-5 h-5 text-white" />
            <span>Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
