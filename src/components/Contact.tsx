import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <h2 className="heading-secondary">Get In Touch</h2>
          <p className="section-subtitle">Reach out for wholesale inquiries, bulk orders, and catalogue requests.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-info"
          >
            <div className="info-card glass">
              <MapPin className="info-icon" size={32} />
              <div>
                <h3>Our Location</h3>
                <p>Ground floor, 172-175, opposite SAROLI, Magob, Surat, Gujarat 395011</p>
              </div>
            </div>

            <div className="info-card glass">
              <Phone className="info-icon" size={32} />
              <div>
                <h3>Phone Number</h3>
                <p>+91 7575085002 <br /> +91 7575096963</p>
              </div>
            </div>

            <div className="info-card glass">
              <Mail className="info-icon" size={32} />
              <div>
                <h3>Email Address</h3>
                <p>saifab70@gmail.com</p>
              </div>
            </div>

            <a href="https://wa.me/917575096963" target="_blank" rel="noreferrer" className="whatsapp-btn">
              <MessageCircle size={24} />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-form glass"
          >
            <h3>Send us a message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const name = (document.getElementById("name") as HTMLInputElement).value;

                const phone = (document.getElementById("phone") as HTMLInputElement).value;

                const inquiry = (document.getElementById("inquiry") as HTMLSelectElement).value;

                const message = (document.getElementById("message") as HTMLTextAreaElement).value;

                const whatsappMessage = `Hello Sai Fab,

      Business Name: ${name}
      Phone Number: ${phone}
      Inquiry Type: ${inquiry}

      Message:
      ${message}`;

                window.location.href = `https://wa.me/917575096963?text=${encodeURIComponent(whatsappMessage)}`;
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Business Name / Your Name</label>
                <input type="text" id="name" placeholder="Enter your business name" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter your phone number" required />
              </div>

              <div className="form-group">
                <label htmlFor="inquiry">Inquiry Type</label>
                <select id="inquiry">
                  <option value="wholesale">Wholesale Pricing</option>
                  <option value="catalogue">Request Catalogue</option>
                  <option value="bulk">Bulk Order</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
