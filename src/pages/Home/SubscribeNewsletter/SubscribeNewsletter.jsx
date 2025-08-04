import { useState } from "react";
import Swal from "sweetalert2";
import { FaEnvelope } from "react-icons/fa";

const SubscribeNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your email address!",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "You have successfully subscribed to our newsletter.",
    });

    setEmail("");
  };

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <div className="flex justify-center mb-4 text-green-600 text-4xl">
          <FaEnvelope />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Stay Updated with <span className="text-green-500">DeshCourier</span>
        </h2>
        <p className="mb-8">
          Subscribe to our newsletter for delivery tips, offers, and service
          updates.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeNewsletter;
