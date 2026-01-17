import React, { useState } from "react";
import { Plus, Minus, Sparkles } from "lucide-react";
import SectionTitle from "../../Components/common/SectionTitle";
import SectionBadge from "../../Components/common/SectionBadge";

const Faq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "What is SimuPitch AI?",
      answer: "SimuPitch AI is an AI-powered sales simulation platform that helps sales professionals practice, refine, and optimize pitches using simulated real-world scenarios and AI-driven feedback.",
    },
    {
      id: 2,
      question: "Who is it for?",
      answer: "Anyone who sells—new reps building confidence, experienced reps refining their message, and leaders who want a consistent way to coach.",
    },
    {
      id: 3,
      question: "What do I get after each simulation? ",
      answer: "AI-driven feedback to help you improve your pitch and run the next rep stronger.",
    },
    {
      id: 4,
      question: "Do I need a sales script to start?",
      answer: "No—you can start with what you already say today, then refine from there.",
    },
    {
      id: 5,
      question: "Can teams use SimuPitch AI? ",
      answer: "Yes—SimuPitch AI is designed to work for individual practice and team-wide training loops (customize this line if you have specific team features).",
    },
    // {
    //   id: 6,
    //   question:
    //     "How does SalesAsk compare to Rilla for home service companies?",
    //   answer:
    //     'While Rilla focuses on "virtual ride-alongs" and visibility for managers, SalesAsk is built for behavioral change. Developed by contractors, SalesAsk uses AI (Coach Dean) to actually score your reps on their sales process, like objection handling and price anchoring, rather than just recording the conversation. Plus, SalesAsk is typically 40% more cost-effective with no rigid seat minimums.',
    // },
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className=" text-white container">
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

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
