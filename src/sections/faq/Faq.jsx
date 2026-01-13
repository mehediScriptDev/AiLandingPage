import React, { useState } from "react";
import { Plus, Minus, Sparkles } from "lucide-react";
import SectionTitle from "../../Components/common/SectionTitle";
import SectionBadge from "../../Components/common/SectionBadge";

const Faq = () => {
  const [openItem, setOpenItem] = useState(6);

  const faqItems = [
    {
      id: 1,
      question: "Is it legal to record conversations with clients?",
      answer: "",
    },
    {
      id: 2,
      question: "How will my sales reps react to being recorded?",
      answer: "",
    },
    {
      id: 3,
      question: "How does the AI work for trades sales?",
      answer: "",
    },
    {
      id: 4,
      question: "How long does setup take?",
      answer: "",
    },
    {
      id: 5,
      question: "How secure is my recorded data?",
      answer: "",
    },
    {
      id: 6,
      question:
        "How does SalesAsk compare to Rilla for home service companies?",
      answer:
        'While Rilla focuses on "virtual ride-alongs" and visibility for managers, SalesAsk is built for behavioral change. Developed by contractors, SalesAsk uses AI (Coach Dean) to actually score your reps on their sales process, like objection handling and price anchoring, rather than just recording the conversation. Plus, SalesAsk is typically 40% more cost-effective with no rigid seat minimums.',
    },
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className=" text-white container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-12">
          <SectionBadge text="HAVE QUESTIONS?" />

          <SectionTitle
            title="FREQUENTLY ASKED QUESTIONS"
            align="text-center"
          />
        </div>

        {/* FAQ Items */}
        <div className="lg:space-y-4 sm:space-y-2.5 space-y-1.5">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-secondaryBg bg-opacity-50 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-opacity-30 transition-colors"
              >
                <span className="lg:text-lg text-sm font-medium pr-8">
                  {item.question}
                </span>
                <div className="shrink-0">
                  {openItem === item.id ? (
                    <div className="lg:w-8 lg:h-8 h-6 w-6 rounded-full border-2 border-white flex items-center justify-center">
                      <Minus className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="lg:w-8 lg:h-8 h-6 w-6 rounded-full border-2 border-white flex items-center justify-center">
                      <Plus className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </button>

              {openItem === item.id && item.answer && (
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
