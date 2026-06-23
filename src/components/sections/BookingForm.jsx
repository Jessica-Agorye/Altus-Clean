import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const BookingForm = () => {
  return (
    <section id="booking" className="py-24 bg-slate-50">
      <Container>
        <SectionHeading
          title="Book a Cleaning Service"
          subtitle="Tell us what you need and we'll get back to you."
        />

        <form className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-3 rounded-lg"
            />

            <select className="border p-3 rounded-lg">
              <option>Select Service</option>

              <option>Home Cleaning</option>

              <option>Office Cleaning</option>

              <option>Deep Cleaning</option>
            </select>
          </div>

          <textarea
            rows="5"
            placeholder="Additional Information"
            className="border p-3 rounded-lg w-full mt-6"
          />

          <div className="mt-6">
            <Button  type="submit">Submit Booking</Button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default BookingForm;
