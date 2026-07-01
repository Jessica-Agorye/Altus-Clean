import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { images } from "../../constants/images";

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <Container>
        <SectionHeading
          title="Our Work"
          subtitle="A glimpse of clean and organized spaces."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <img
            src={images.img6}
            alt=""
            className="rounded-xl h-72 w-full object-cover"
          />

          <img
            src={images.img2}
            alt=""
            className="rounded-xl h-72 w-full object-cover"
          />

          <img
            src={images.img3}
            alt=""
            className="rounded-xl h-72 w-full object-cover"
          />

          <img
            src={images.img7}
            alt=""
            className="rounded-xl h-72 w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
