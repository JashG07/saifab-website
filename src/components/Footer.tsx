import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="logo">
              Sai Fab<span className="dot">.</span>
            </h2>
            <p className="footer-desc">
              Premium Fabrics & Fashion for Modern Retailers. Trusted by thousands across India for quality and trends.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Fb</a>
              <a href="#" aria-label="Instagram">Ig</a>
              <a href="#" aria-label="Twitter">Tw</a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Fabric Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Cotton Fabrics</a></li>
              <li><a href="#">Silk Collections</a></li>
              <li><a href="#">Designer Prints</a></li>
              <li><a href="#">Linen & Rayon</a></li>
              <li><a href="#">Dress Materials</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <MapPin size={20} className="contact-icon" />
                <span>Ground floor, 172-175, opposite SAROLI, Magob, Surat, Gujarat 395011</span>
              </li>
              <li>
                <Phone size={20} className="contact-icon" />
                <span>+91 7575085002</span>
              </li>
              <li>
                <Mail size={20} className="contact-icon" />
                <span>saifab70@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sai Fab. All Rights Reserved. Designed for Premium Retailers.</p>
        </div>
      </div>
    </footer>
  );
}
