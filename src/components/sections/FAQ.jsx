import { useState } from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { faqData } from "../../constants/faq";

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" className=" py-24">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Answers to common questions."
        />

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="border-b py-5">
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full text-left font-medium cursor-pointer"
              >
                {item.question}
              </button>

              {active === index && (
                <p className="mt-4 text-slate-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
