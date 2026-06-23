import Button from "../common/Button";
import Container from "../common/Container";
import { images } from "../../constants/images";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-slate-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-teal-700 font-medium">
              Professional Cleaning Services
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-4">
              Clean Spaces, Stress-Free Living
            </h1>

            <p className="text-slate-600 mt-6 text-lg">
              Reliable cleaning solutions for homes, offices, and commercial
              properties.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a href="#booking">
                <Button>Book a Cleaning</Button>
              </a>

              <a href="#contact">
                <button className="border border-slate-300 px-6 py-3 rounded-lg">
                  Contact Us
                </button>
              </a>
            </div>
          </div>

          <div>
            <img
              src={images.img2}
              alt="Cleaning service"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
