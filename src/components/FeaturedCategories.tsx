import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './FeaturedCategories.css';

const categories = [
  { id: 1, name: 'Cotton Fabrics', image: '/assets/cotton-bg.png', desc: 'Premium organic & pure cotton.' },
  { id: 2, name: 'Silk Fabrics', image: '/assets/hero-bg.png', desc: 'Luxurious silk for elegant wear.' },
  { id: 3, name: 'Designer Prints', image: '/assets/designer-bg.png', desc: 'Exclusive high-end patterns.' },
  { id: 4, name: 'Linen & Rayon', image: '/assets/cotton-bg.png', desc: 'Breathable & comfortable materials.' },
];

export default function FeaturedCategories() {
  return (
    <section id="collections" className="section bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <h2 className="heading-secondary">Featured Categories</h2>
          <p className="section-subtitle">Explore our premium range of fabrics crafted for excellence.</p>
        </motion.div>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="category-card"
            >
              <div className="card-image-wrapper">
                <img src={cat.image} alt={cat.name} className="card-image" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
                <button className="explore-btn">
                  Explore <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
