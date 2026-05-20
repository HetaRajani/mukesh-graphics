import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Upload,
  ArrowRight,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import API from "../api/api";

import "./ContactPage.css";

function ContactPage() {

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

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  /* HANDLE INPUT */

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  /* SUBMIT */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (file) {
        data.append("file", file);
      }

      const response = await API.post(
        "/quote",
        data
      );

      setSuccess(response.data.message);

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

      setFile(null);

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  return (
    <>
      <Header />

      <section className="quote-page">

        {/* LEFT */}

        <div className="quote-left">

          <p className="quote-label">
            REQUEST A QUOTE
          </p>

          <h1>
            Let’s Create Your
            <br />
            <span>Premium Packaging</span>
          </h1>

          <p className="quote-text">
            Tell us about your project and our creative
            team will help you craft premium packaging,
            printing and branding solutions tailored
            for your business.
          </p>

          <div className="quote-contact-list">

            <div className="quote-contact-card">
              <Mail size={22} />
              <div>
                <h4>Email Us</h4>
                <p>info@printcraft.com</p>
              </div>
            </div>

            <div className="quote-contact-card">
              <Phone size={22} />
              <div>
                <h4>Call Us</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="quote-contact-card">
              <MapPin size={22} />
              <div>
                <h4>Visit Office</h4>
                <p>Gujarat, India</p>
              </div>
            </div>

          </div>

        </div>

        {/* FORM */}

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

              <option>
                Packaging Design
              </option>

              <option>
                Printing
              </option>

              <option>
                Branding
              </option>

              <option>
                Product Box
              </option>

              <option>
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

            {/* FILE */}

            <label className="upload-box">

              <Upload size={20} />

              {file
                ? file.name
                : "Upload Design / Reference"}

              <input
                type="file"
                hidden
                onChange={(e) =>
                  setFile(e.target.files[0])
                }
              />

            </label>

            {/* SUCCESS */}

            {success && (
              <p
                style={{
                  color: "#7c3aed",
                  marginBottom: "20px",
                  fontWeight: "600",
                }}
              >
                {success}
              </p>
            )}

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
            >

              {loading
                ? "Sending..."
                : "Request Custom Quote"}

              <ArrowRight size={18} />

            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ContactPage;