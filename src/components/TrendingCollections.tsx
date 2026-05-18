import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import './TrendingCollections.css';

const collections = [
  { id: 1, name: 'Royal Emerald Silk', material: '100% Pure Silk', color: 'Emerald Green', price: 'Wholesale Only', image: '/assets/designer-bg.png' },
  { id: 2, name: 'Classic Ivory Cotton', material: 'Organic Cotton', color: 'Ivory White', price: 'Wholesale Only', image: '/assets/cotton-bg.png' },
  { id: 3, name: 'Golden Zari Jacquard', material: 'Jacquard Blend', color: 'Gold / Black', price: 'Wholesale Only', image: '/assets/hero-bg.png' },
];

export default function TrendingCollections() {
  return (
    <section className="section collections-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <h2 className="heading-secondary">Trending Collections</h2>
          <p className="section-subtitle">Discover what's currently in demand across the retail market.</p>
        </motion.div>

        <div className="trending-grid">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="trending-card"
            >
              <div className="trending-image-box">
                <img src={item.image} alt={item.name} />
                <div className="trending-action">
                  <button className="inquiry-btn">
                    <ShoppingBag size={18} /> Inquiry Now
                  </button>
                </div>
              </div>
              <div className="trending-info">
                <h3>{item.name}</h3>
                <div className="item-details">
                  <span className="badge">{item.material}</span>
                  <span className="badge">{item.color}</span>
                </div>
                <p className="wholesale-tag">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
