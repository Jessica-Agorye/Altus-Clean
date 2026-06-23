import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { services } from "../../constants/services";

const Services = () => {
  return (
    <section id="services" className="py-24">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Professional cleaning solutions for homes and businesses."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white shadow-md rounded-xl p-6"
            >
              <h3 className="font-bold text-xl mb-4">{service.title}</h3>

              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
