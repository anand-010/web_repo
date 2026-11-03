import Link from "next/link";

const officeAddress = "No.3/1, 13th ‘A’ Main, 21st Cross Rd, RKK Nagar, BTM Layout 2nd Stage, Bengaluru, Karnataka 560076";
const officeMapUrl = "https://www.google.com/maps/search/?api=1&query=No.3%2F1%2C%2013th%20%E2%80%98A%E2%80%99%20Main%2C%2021st%20Cross%20Rd%2C%20RKK%20Nagar%2C%20BTM%20Layout%202nd%20Stage%2C%20Bengaluru%2C%20Karnataka%20560076";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-col brand-col">
          <Link href="/" className="brand">
            <img src="/assets/img/logo.png" alt="Hom Controls Logo" style={{ height: "40px", verticalAlign: "middle" }} />
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
            <li>
              <a href={officeMapUrl} target="_blank" rel="noreferrer" className="footer-address">
                {officeAddress}
              </a>
            </li>
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
