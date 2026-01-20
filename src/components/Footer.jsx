import "./Footer.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-col">
          <h3 className="footer-logo">ShringarVastra</h3>
          <p className="footer-text">
            ShringarVastra is an e-commerce platform created to deliver the
            traditional and cultural attire for women.
          </p>
        </div>

        {/* ABOUT */}
        <div className="footer-col">
          <h4>About ShringarVastra</h4>
          <ul>
            <li>Careers</li>
            <li>Affiliate Program</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h4>Stay Connected</h4>
          <ul className="social-links">
            <li>
              <FaFacebookF /> Facebook
            </li>
            <li>
              <FaTwitter /> Twitter
            </li>
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li>Help Desk</li>
            <li>Support, 24/7</li>
            <li>Community of ShringarVastra</li>
          </ul>
        </div>

        {/* PAYMENT */}
        <div className="footer-col">
          <h4>Payment Method</h4>
          <ul>
            <li>Cash on Delivery</li>
            <li>Khalti</li>
            <li>Esewa</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
