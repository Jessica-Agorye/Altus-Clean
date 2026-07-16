import { useState, useEffect } from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Automatically hide success/error messages after 5 seconds
  useEffect(() => {
    if (!success && !error) return;

    const timer = setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [success, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      // Replace this with your Google Apps Script fetch
      console.log(formData);

      // Simulate an API request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSuccess(
        "Your booking request has been submitted successfully. We'll contact you shortly.",
      );

      // Reset the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setError(
        "We couldn't submit your booking. Please try again in a few minutes.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-24 bg-slate-50">
      <Container>
        <SectionHeading
          title="Book a Cleaning Service"
          subtitle="Tell us what you need and we'll get back to you."
        />

        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border p-3 rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border p-3 rounded-lg"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border p-3 rounded-lg"
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              required
            >
              <option value="">Select a Service</option>
              <option value="Residential Cleaning">Residential Cleaning</option>
              <option value="Home Deep Cleaning">Home Deep Cleaning</option>
              <option value="Move-In Cleaning">Move-In Cleaning</option>
              <option value="Move-Out Cleaning">Move-Out Cleaning</option>
              <option value="Commercial Cleaning">Commercial Cleaning</option>
              <option value="Post-Construction Cleaning">
                Post-Construction Cleaning
              </option>
            </select>
          </div>

          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Information"
            className="border p-3 rounded-lg w-full mt-6"
          />

          {success && (
            <div className="mt-6 rounded-lg border border-green-300 bg-green-100 p-4 text-green-700">
              {success}
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-lg border border-red-300 bg-red-100 p-4 text-red-700">
              {error}
            </div>
          )}

          <div className="mt-6">
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Booking"}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default BookingForm;
