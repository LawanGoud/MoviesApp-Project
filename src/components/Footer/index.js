import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <footer className="footer">
    <div className="social-icons">
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGoogle className="icon" />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="icon" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="icon" />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="icon" />
      </a>
    </div>
    <p>Contact Us</p>
  </footer>
)

export default Footer
