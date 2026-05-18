import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="overlay"></div>
        <img 
          src="/assets/hero-bg.png" 
          alt="Premium Fabric Texture" 
          className="hero-video" // we use img for now, simulating video/banner
        />
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="hero-badge">Welcome to Sai Fab</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hero-title"
        >
          Premium Textile Collections <br />
          <span className="highlight">for Every Retail Business</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hero-subtitle"
        >
          Sai Fab delivers high-quality fabrics, trending designs, and wholesale collections trusted by retailers across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hero-cta"
        >
          <a href="#collections" className="btn btn-primary cta-btn">
            Explore Collection <ArrowRight size={20} />
          </a>
          <a href="#contact" className="btn btn-outline cta-btn">
            Contact Us
          </a>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}
