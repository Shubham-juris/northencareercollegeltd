import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      
      <div className="icons">
        <FontAwesomeIcon icon={faFacebookF} className="fab" />
        <FontAwesomeIcon icon={faTwitter} className="fab" />
        <FontAwesomeIcon icon={faInstagram} className="fab" />
        <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
      </div>

      <p>
   Unit of Yk Career College
      </p>
      <footer className="footer">
  <div className="footer-container">
    <div className="footer-section about">
      <h2>Northern Career College</h2>
      <p>
        We're dedicated to providing high-quality education to everyone.
        Our online platform makes learning accessible, flexible, and enjoyable.
      </p>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>

    <div className="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/course">All Courses</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Facilities">Facilities</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>

  

    <div className="footer-section contact-info">
      <h3>Contact Info</h3>
      <p><i className="fas fa-map-marker-alt"></i> 215-213 Main Street, Slave Lake AB, T0G 2A2<br/>
      <br/>311 32 WESTWINDS CRES NE,110,CALGARY,Alberta,T3J5L3</p>
      <p><i className="fas fa-phone-alt"></i> (403)921-4529</p>
      <p><i className="fas fa-envelope"></i> YK careercollege@gmail.com</p>
    </div>
  </div>

  <div className="footer-bottom">
   
  </div>
</footer>

    </section>
  );
};

export default Footer;
