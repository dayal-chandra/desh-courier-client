import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How do I send a parcel with DeshCourier?",
    answer:
      "You can book a delivery through our website by filling out the parcel details, pickup & delivery address, and confirming the booking. Our delivery partner will collect it from your location.",
  },
  {
    question: "Where do you deliver?",
    answer:
      "We deliver nationwide across Bangladesh — from major cities to remote areas.",
  },
  {
    question: "How much does delivery cost?",
    answer:
      "Our pricing depends on parcel weight, distance, and delivery type. You'll see the exact price when booking your parcel.",
  },
  {
    question: "How can I track my parcel?",
    answer:
      "Once your parcel is booked, you'll receive a tracking ID. Enter it on our website to see real-time status updates.",
  },
  {
    question: "Is my parcel safe with DeshCourier?",
    answer:
      "Absolutely. We ensure safe handling with secure packaging and experienced riders. Each parcel is tracked until delivery.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#b3efb68e]">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked <span className="text-green-500">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="border border-gray-200 rounded-xl p-4 bg-gray-50 shadow-sm cursor-pointer transition hover:shadow-md"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaMinus className="text-green-500" />
                ) : (
                  <FaPlus className="text-green-500" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
