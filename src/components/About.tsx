import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './About.css';

const stats = [
  { label: 'Happy Retailers', value: 200, suffix: '+' },
  { label: 'Fabric Collections', value: 15, suffix: '+' },
  { label: 'Years of Experience', value: 10, suffix: '' },
  { label: 'Cities Served', value: 5, suffix: '+' },
];

function Counter({ end, suffix }: { end: number, suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span className="stat-number">{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-image-container"
          >
            <div className="about-image-wrapper primary-image">
              <img src="/assets/designer-bg.png" alt="Sai Fab Excellence" />
            </div>
            <div className="about-experience-badge glass">
              <h3>10+</h3>
              <p>Years of <br />Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-content"
          >
            <h4 className="sub-heading">About Sai Fab</h4>
            <h2 className="heading-secondary text-left">We craft fabrics that define modern luxury</h2>
            <p className="about-desc">
              Sai Fab is India's most trusted textile supplier, delivering premium quality standards to retailers, boutiques, and fashion stores. We blend traditional craftsmanship with modern fashion trends to bring you an unparalleled collection of wholesale fabrics.
            </p>
            <p className="about-desc">
              With our reliable delivery network and commitment to quality, we ensure your business never runs out of the latest trends.
            </p>

            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <Counter end={stat.value} suffix={stat.suffix} />
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <button className="btn btn-primary mt-4">Discover Our Story</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
