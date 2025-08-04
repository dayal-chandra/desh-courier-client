import {
  FaGlobeAsia,
  FaClock,
  FaMoneyBillWave,
  FaShieldAlt,
  FaHeadset,
  FaMobileAlt,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaGlobeAsia className="text-green-500 text-3xl" />,
      title: "Nationwide Coverage",
      description:
        "We deliver to every corner of Bangladesh, from cities to remote villages.",
    },
    {
      icon: <FaClock className="text-green-500 text-3xl" />,
      title: "Fast & Reliable Service",
      description:
        "Smart routing ensures your parcels arrive on time, every time.",
    },
    {
      icon: <FaMoneyBillWave className="text-green-500 text-3xl" />,
      title: "Affordable Pricing",
      description: "Enjoy premium delivery services at budget-friendly rates.",
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-3xl" />,
      title: "Secure Handling",
      description:
        "We treat your parcels with care, using secure packaging and tracking.",
    },
    {
      icon: <FaHeadset className="text-green-500 text-3xl" />,
      title: "24/7 Support",
      description:
        "Friendly support team always available to help with your needs.",
    },
    {
      icon: <FaMobileAlt className="text-green-500 text-3xl" />,
      title: "Easy Booking & Tracking",
      description:
        "Send, track, and manage your deliveries through a user-friendly platform.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <div className="text-4xl font-bold mb-4">
          Why Choose Desh<span className="text-green-600">C</span>ourier ?
        </div>
        <p className="mb-12">
          Your trusted logistics partner for reliable, fast, and secure delivery
          across Bangladesh.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow shadow-[#43A047] hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_#43A047]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
