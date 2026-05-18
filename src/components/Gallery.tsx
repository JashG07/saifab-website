import { motion } from 'framer-motion';
import './Gallery.css';

const galleryItems = [
  { id: 1, img: '/assets/designer-bg.png', span: 'tall' },
  { id: 2, img: '/assets/cotton-bg.png', span: 'wide' },
  { id: 3, img: '/assets/hero-bg.png', span: 'square' },
  { id: 4, img: '/assets/cotton-bg.png', span: 'square' },
  { id: 5, img: '/assets/designer-bg.png', span: 'wide' },
  { id: 6, img: '/assets/hero-bg.png', span: 'tall' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <h2 className="heading-secondary">Fabric Gallery</h2>
          <p className="section-subtitle">Get inspired by our diverse and premium fabric collections.</p>
        </motion.div>

        <div className="masonry-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`gallery-item ${item.span}`}
            >
              <img src={item.img} alt="Fabric Gallery" loading="lazy" />
              <div className="gallery-overlay">
                <span className="zoom-icon">+</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
