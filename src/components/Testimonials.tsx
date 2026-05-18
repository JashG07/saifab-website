import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'Indian Attire',
    role: 'Kurti Manufacturer, Surat',
    text: 'Sai Fab has completely transformed our inventory. Their premium silk and cotton collections are highly loved by our customers. Fast delivery and unmatched quality!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Shan Enterprise',
    role: 'Kurti Manufacturer, Surat',
    text: 'As a designer, I need specific luxury fabrics, and Sai Fab never disappoints. Their designer prints and royal emerald collection are simply breathtaking.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Savani Creation',
    role: 'Lehenga - Choli Manufacturer, Surat',
    text: 'The wholesale pricing is highly competitive without any compromise on the quality. It’s been a pleasure doing business with them for over 5 years.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <h2 className="heading-secondary">What Retailers Say</h2>
          <p className="section-subtitle">Trusted by thousands of fashion businesses across India.</p>
        </motion.div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="testimonial-card glass"
            >
              <Quote className="quote-icon" size={40} />
              <div className="rating">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="reviewer-info">
                <div className="reviewer-avatar">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
