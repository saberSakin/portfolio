/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */

import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Email sent successfully!");
        // Add any additional handling or feedback here
      } else {
        console.error("Error sending email:", data.message);
        // Handle error or provide feedback to the user
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input mb-4"
                onChange={handleChange}
                style={{ textTransform: "none" }}
                autoComplete="off"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input mb-4"
                onChange={handleChange}
                style={{ textTransform: "none" }}
                autoComplete="off"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input mb-4"
              onChange={handleChange}
              style={{ textTransform: "none" }}
              autoComplete="off"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea mb-4"
              onChange={handleChange}
              style={{ textTransform: "none" }}
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 mx-w-[170px]
                 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
                 hover:border-accent group"
            >
              <span
                className="group-hover:-translate-y-[120%] group-hover:opacity-0
                 transition-all duration-500"
              >
                Let's talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex
                  group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300
                  absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
