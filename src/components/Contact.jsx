import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(result.error || "Something went wrong!");
      }
    } catch (err) {
      setError("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row h-full items-center justify-center py-20 px-6 md:px-10 gap-12"
    >
      {/* Contact Content */}
      <div className="w-full md:w-[40%] flex flex-col text-start items-start justify-start mb-10 md:mb-20 px-10 md:px-20">
        <h2 className="text-4xl md:text-5xl text-white font-semibold">Contact Us</h2>
        <p className="text-white text-sm md:text-lg mt-4">
          Have a
          <span className="text-purple-300"> Project in mind? <br /></span>
          We’d love to hear from you! Reach out to us, and let's turn your
          <span className="text-purple-300"> Ideas into Reality.</span>
        </p>
        <h3 className="text-xl md:text-2xl text-white font-semibold pt-8 pb-4">
          Alternate Contact:
        </h3>
        <p className="text-purple-300 text-sm md:text-lg">
          Email: <span className="text-white">Karankendreg@gmail.com</span>
        </p>
        <p className="text-purple-300 text-sm md:text-lg mt-2">
          Whatsapp: <span className="text-white">+918767443431</span>
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-[30%] p-6 md:p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl text-white font-semibold mb-6 ">Send Message</h2>

          {/* Full Name */}
          <div className="relative mb-6">
            <input
              type="text"
              className="w-full border-b-2 bg-white/10 border-gray-400 outline-none rounded-lg px-4 text-white placeholder:text-gray-400 focus:border-pink-500 py-3"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <input
              type="email"
              className="w-full border-b-2 bg-white/10 border-gray-400 outline-none rounded-lg px-4 text-white placeholder:text-gray-400 focus:border-pink-500 py-3"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Message */}
          <div className="relative mb-6">
            <textarea
              className="w-full border-b-2 bg-white/10 border-gray-400 outline-none rounded-lg px-4 text-white placeholder:text-gray-400 focus:border-pink-500 py-3"
              placeholder="Type Your Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <input
              type="submit"
              value={isSubmitting ? "Sending..." : "Send"}
              className="bg-purple-500 text-white py-3 px-8 cursor-pointer hover:bg-purple-600 transition rounded-full w-full md:w-auto"
              disabled={isSubmitting}
            />
          </div>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>
    </section>
  );
};

export default Contact;
