import "./ContactComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactComponent = () => {
  return (
    <section className="contact-us">
      <div className="row">
        {/* Contact Info */}
        <div className="contact-col">
          <div>
            <FontAwesomeIcon icon={faHome} className="icon" />
            <span>
              <h5>215-213 Main Street, Slave Lake, AB, T0G 2A2
              <br/><br/>311 32 WESTWINDS CRES NE,#110 ,CALGARY,Alberta,T3J5L3</h5>
              
            </span>
          </div>

          <div>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span>
              <h5>(403) 921-4529</h5>
            </span>
          </div>

          <div>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>
              <h5>www.northencareercollege.ca</h5>
            </span>
          </div>

          {/* Embedded Google Map */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36362.73695762006!2d-114.77153320000001!3d55.2764302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a28d63eb73668f%3A0x774108574a7ed0c9!2sSlave%20Lake%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sin!4v1746613518847!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="College Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-col">
          <form>
            <input type="text" placeholder="Enter your name" required />
            <input type="email" placeholder="Enter email address" required />
            <input type="text" placeholder="Enter your subject" required />
            <textarea rows="8" placeholder="Message" required></textarea>
            <button type="submit" className="hero-btn red-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
