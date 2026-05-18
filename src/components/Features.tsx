import { motion } from 'framer-motion';
import { ShieldCheck, Truck, TrendingUp, DollarSign, PackageOpen, Award } from 'lucide-react';
import './Features.css';

const features = [
  { icon: ShieldCheck, title: 'Premium Quality', desc: '100% authentic and high-grade materials.' },
  { icon: PackageOpen, title: 'Bulk Orders', desc: 'Seamless processing for wholesale requirements.' },
  { icon: TrendingUp, title: 'Latest Trends', desc: 'Always updated with the newest fashion designs.' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Reliable and swift logistics across India.' },
  { icon: DollarSign, title: 'Affordable Wholesale', desc: 'Highly competitive pricing for retailers.' },
  { icon: Award, title: 'Trusted by Retailers', desc: 'Years of industry trust and excellence.' },
];

export default function Features() {
  return (
    <section className="section features-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <h2 className="heading-secondary">Why Choose Sai Fab</h2>
          <p className="section-subtitle">We empower your retail business with uncompromising quality and service.</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card glass"
              >
                <div className="feature-icon-wrapper">
                  <Icon size={32} className="feature-icon" />
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
