import toast from "react-hot-toast";
import { useState } from "react";

import {
  ArrowRight,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import API from "../api/api";

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

      


      await API.post(
        "/quote",
        data,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      toast.success(
        "Quote submitted successfully"
      );

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

      

    } catch (error) {

      console.log(
        error.response?.data ||
        error.message
      );

      toast.error(
        error.response?.data?.message ||
        error.message
      );

    } finally {

      setLoading(false);

    }

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

            

            

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
            >

              {
                loading ? (
                  <div className="spinner"></div>
                ) : (
                  <>
                    Request Custom Quote
                    <ArrowRight size={18} />
                  </>
                )
              }

            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default RequestQuotePage;