import { motion } from "framer-motion";
import {
  Printer,
  Package,
  PenTool,
  ArrowRight,
} from "lucide-react";

import "./Services.css";

function Services() {

  const services = [
    {
      number: "01",
      icon: <Printer size={34} />,
      title: "Premium Printing",
      desc: "Sharp, vibrant, and high-quality printing with precision and attention to every detail.",
    },

    {
      number: "02",
      icon: <Package size={34} />,
      title: "Luxury Packaging",
      desc: "Elegant packaging solutions that add value and create unforgettable unboxing experiences.",
    },

    {
      number: "03",
      icon: <PenTool size={34} />,
      title: "Brand Identity",
      desc: "Complete visual identity systems that communicate your brand’s essence with clarity.",
    },
  ];

  return (

    <section className="minimal-services">

      <div className="services-glow"></div>

      <p className="services-label">
        OUR SERVICES
      </p>

      <h2>
        Premium Solutions <br />
        For <span>Modern Brands</span>
      </h2>

      <p className="services-subtitle">
        High-end printing, luxury packaging, and premium finishing
        crafted to elevate your brand and leave a lasting impression.
      </p>

      <div className="services-grid">

        {services.map((item, index) => (

          <motion.div
            className="service-card"
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >

            <span className="service-number">
              {item.number}
            </span>

            <div className="service-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <div className="small-line"></div>

            <p>{item.desc}</p>

            <a href="#">

              Learn More

              <ArrowRight size={18} />

            </a>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Services;