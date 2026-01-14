import React, { useState } from "react";
import { Plus, Minus, Sparkles } from "lucide-react";
import SectionTitle from "../../Components/common/SectionTitle";
import SectionBadge from "../../Components/common/SectionBadge";

const Faq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "Is it legal to record conversations with clients?",
      answer: "Yes, it's legal in most states with one-party consent. We recommend informing customers at the beginning of calls that conversations may be recorded for quality and training purposes. Our platform includes customizable consent scripts and compliance tools to help you meet local regulations.",
    },
    {
      id: 2,
      question: "How will my sales reps react to being recorded?",
      answer: "Initially, there may be some hesitation, but most reps quickly appreciate the personalized coaching and feedback. The AI helps them improve their skills, close more deals, and earn more commissions. Many sales teams report increased confidence and better performance within the first few weeks.",
    },
    {
      id: 3,
      question: "How does the AI work for trades sales?",
      answer: "Our AI is specifically trained on home service sales conversations. It analyzes talk patterns, objection handling, pricing strategies, and closing techniques unique to trades like plumbing, HVAC, roofing, and remodeling. Coach Dean provides actionable insights based on what actually works in the field.",
    },
    {
      id: 4,
      question: "How long does setup take?",
      answer: "Most teams are up and running within one week. Our onboarding process includes integration with your existing tools, customization to match your sales process, and team training. You'll start seeing valuable insights from your first recorded conversations.",
    },
    {
      id: 5,
      question: "How secure is my recorded data?",
      answer: "We take security seriously. All data is encrypted in transit and at rest using bank-level encryption. We're SOC 2 compliant and undergo regular security audits. Your conversations and customer data are stored on secure servers with strict access controls and are never shared with third parties.",
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
