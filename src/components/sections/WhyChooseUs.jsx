import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import {
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineUsers,
} from "react-icons/hi2";

const features = [
  {
    icon: HiOutlineSparkles,
    title: "Attention to Detail",
    description:
      "We focus on every corner to leave your space fresh and clean.",
  },
  {
    icon: HiOutlineClock,
    title: "Flexible Scheduling",
    description: "Choose a time that works best for your home or business.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Reliable Service",
    description: "Professional and dependable cleaning solutions.",
  },
  {
    icon: HiOutlineUsers,
    title: "Friendly Team",
    description: "Courteous professionals committed to quality service.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionHeading
          title="Why Choose Us"
          subtitle="Professional cleaning solutions tailored to your needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <Icon className="text-4xl text-teal-700 mb-4" />

                <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>

                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
