import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the 3D menu technology work?",
      answer: "Our 3D menu technology uses advanced AR and 3D modeling to create photorealistic representations of your dishes. Customers can view, rotate, and interact with food items directly on their phones or tablets."
    },
    {
      question: "Do customers need to download an app?",
      answer: "No! Our 3D menus work directly through web browsers. Customers simply scan a QR code or visit your menu URL to access the interactive experience instantly."
    },
    {
      question: "How long does implementation take?",
      answer: "Typically 2-4 weeks depending on your menu size. We handle all the 3D modeling, photography, and technical setup while you focus on running your restaurant."
    },
    {
      question: "Can I update menu items and prices?",
      answer: "Absolutely! You get access to our easy-to-use dashboard where you can update prices, descriptions, availability, and add new items in real-time."
    },
    {
      question: "What devices are supported?",
      answer: "Our 3D menus work on all modern smartphones, tablets, and computers. The AR features work best on iOS and Android devices with camera access."
    },
    {
      question: "Is there a setup fee?",
      answer: "Setup fees vary based on your plan and menu size. We offer transparent pricing with no hidden costs. Contact us for a custom quote based on your needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about Dine3D.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-black border golden-border rounded-2xl overflow-hidden hover:golden-border transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:golden-gradient/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 golden-text flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 golden-text flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 animate-fade-in">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
