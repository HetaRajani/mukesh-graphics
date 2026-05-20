import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Package,
  PenTool,
  Box,
  Tag,
  Image,
  Layers,
} from "lucide-react";

import "./Portfolio.css";

function Portfolio({ showButton = true }) {

  const projects = [

    {
      title: "Packaging Design",
      icon: <Package size={22} />,
      image: "/images/packaging.jpg",
    },

    {
      title: "Brand Identity",
      icon: <PenTool size={22} />,
      image: "/images/brand.jpg",
    },

    {
      title: "Product Box",
      icon: <Box size={22} />,
      image: "/images/box.jpg",
    },

    {
      title: "Label Design",
      icon: <Tag size={22} />,
      image: "/images/label.jpg",
    },

    {
      title: "Poster Print",
      icon: <Image size={22} />,
      image: "/images/poster.jpg",
    },

    {
      title: "Creative Mockup",
      icon: <Layers size={22} />,
      image: "/images/mockup.jpg",
    },

  ];

  return (

    <section className="portfolio-section">

      <p className="portfolio-label">
        OUR WORK
      </p>

      <div className="portfolio-line"></div>

      <h2>
        Selected Work
      </h2>

      <p className="portfolio-subtitle">
        Packaging, branding and print projects crafted
        for modern premium brands.
      </p>

      <div className="portfolio-grid">

        {projects.map((item, index) => (

          <motion.div
            className="portfolio-card"
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="portfolio-icon">
              {item.icon}
            </div>

            <div className="portfolio-overlay">

              <div>
                <h3>{item.title}</h3>
              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {showButton && (

        <div className="portfolio-button-wrapper">

          <Link
            to="/portfolio"
            className="portfolio-btn"
          >
            View All Projects
          </Link>

        </div>

      )}

    </section>

  );
}

export default Portfolio;