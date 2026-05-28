import toast from "react-hot-toast";
import { useState } from "react";

import { ArrowRight } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "./RequestQuotePage.css";

function RequestQuotePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    quantity: "",
    budget: "",
    projectDetails: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      toast.success("Quote submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        quantity: "",
        budget: "",
        projectDetails: "",
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Header />

      <section className="request-page">
        <div className="quote-form-box">
          <div className="quote-badge">
            Premium Project Inquiry
          </div>

          <form
            className="quote-form"
            onSubmit={handleSubmit}
          >
            <div className="form-grid">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">
                Select Service
              </option>

              <option value="Packaging Design">
                Packaging Design
              </option>

              <option value="Printing">
                Printing
              </option>

              <option value="Branding">
                Branding
              </option>

              <option value="Product Box">
                Product Box
              </option>

              <option value="Label Design">
                Label Design
              </option>
            </select>

            <div className="form-grid">
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
              />

              <input
                type="text"
                name="budget"
                placeholder="Estimated Budget"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="projectDetails"
              placeholder="Tell us about your project..."
              value={formData.projectDetails}
              onChange={handleChange}
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? (
                <div className="spinner"></div>
              ) : (
                <>
                  Request Custom Quote
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default RequestQuotePage;