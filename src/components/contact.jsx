import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setErrorMsg("");

    emailjs
      .sendForm(
        "service_bez2x5b",      // replace
        "template_52g34tx",     // replace
         form.current,
        "OHarzVLI3W4n_d6DX"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
          setErrorMsg("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-28 px-8">


      <div className="max-w-3xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Let’s Work Together
        </motion.h2>

        <p className="text-gray-400 text-center mb-12">
          Have a project in mind? Fill out the form and I’ll respond within 24 hours.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-white transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-white transition"
          />

          <select
            name="project_type"
            required
            className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-white transition"
          >
            <option value="">What type of project?</option>
            <option value="Portfolio Website">Portfolio Website</option>
            <option value="Business Website">Business Website</option>
            <option value="Full Stack Web App">Full Stack Web App</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>

          <select
            name="budget"
            required
            className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-white transition"
          >
            <option value="">Budget Range</option>
            <option value="Below ₹5,000">Below ₹5,000</option>
            <option value="₹5,000 – ₹20,000">₹5,000 – ₹20,000</option>
            <option value="₹20,000 – ₹50,000">₹20,000 – ₹50,000</option>
            <option value="₹50,000+">₹50,000+</option>
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            required
            className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-white transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-center mt-4">
              Message sent successfully 🚀 I’ll get back to you soon.
            </p>
          )}

          {errorMsg && (
            <p className="text-red-500 text-center mt-4">
              {errorMsg}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}

export default Contact;
