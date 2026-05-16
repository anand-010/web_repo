import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-col brand-col">
          <Link href="/" className="brand">
            <img src="/assets/img/logo.jpeg" alt="Hom Controls Logo" style={{ height: "40px", verticalAlign: "middle" }} />
          </Link>
          <p>
            Smart automation products designed for premium homes, villas, offices, and integrated building projects.
          </p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@unifylabs.in">info@unifylabs.in</a></li>
            <li><Link href="/contact-us">Request Callback</Link></li>
            <li><Link href="/contact-us">Support Inquiry</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Copyright Unify Electronics Lab Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
