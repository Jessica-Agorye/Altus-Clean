import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const steps = [
  "Book a Service",
  "Tell Us Your Needs",
  "We Arrive On Schedule",
  "Enjoy a Clean Space",
];

const CleaningProcess = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          title="How It Works"
          subtitle="Simple and straightforward booking process."
        />

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step} className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="mt-5 font-semibold text-lg">{step}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CleaningProcess;
