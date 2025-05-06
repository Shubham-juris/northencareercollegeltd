import { Link } from "react-router-dom";

import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <h1>Welcome to Northern Career College</h1>
      <p>
        Empowering students through world-class education and innovation. <br />
        Explore our diverse programs in Science, Technology, Engineering, and Mathematics.
      </p>
      <Link to="/about" className="hero-btn">
        Learn More About Us
      </Link>
    </div>
  );
};

export default TextBox;
