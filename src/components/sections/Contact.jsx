import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading title="Contact Us" subtitle="We're ready to help." />

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold text-xl mb-4">Contact Information</h3>

            <p>Email: altuscleaningservices@gmail.com</p>

            <p className="mt-3">Phone: +234 802 261 7982</p>

            <p className="mt-3">Monday - Saturday</p>
          </div>

          <div>
            <img src="/contact.jpg" alt="" className="rounded-xl" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
