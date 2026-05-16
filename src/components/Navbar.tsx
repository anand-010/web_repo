"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close nav on route change
  useEffect(() => {
    setNavOpen(false);
    setOpenDropdowns([]);
  }, [pathname]);

  const toggleDropdown = (e: React.MouseEvent, id: string) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setOpenDropdowns((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    }
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link href="/" className="brand">
          <img
            src="/assets/img/logo.png"
            alt="Hom Controls Logo"
            style={{ height: "40px", verticalAlign: "middle" }}
          />
        </Link>
        <ul className={`nav-links ${navOpen ? "nav-open" : ""}`}>
          <li>
            <Link href="/" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
          </li>
          <li
            className={`dropdown ${openDropdowns.includes("solutions") ? "dropdown-open" : ""}`}
          >
            <a href="#" onClick={(e) => toggleDropdown(e, "solutions")}>
              Solutions <i className="fas fa-chevron-down nav-icon"></i>
            </a>
            <ul className="dropdown-menu">
              <li><Link href="/solutions#home">Home</Link></li>
              <li><Link href="/solutions#conference-room">Conference Room</Link></li>
              <li><Link href="/solutions#theater">Theater</Link></li>
              <li><Link href="/solutions#hotel-rooms">Hotel Rooms</Link></li>
              <li><Link href="/solutions#villas">Villas</Link></li>
            </ul>
          </li>
          <li
            className={`dropdown ${openDropdowns.includes("products") ? "dropdown-open" : ""}`}
          >
            <Link href="/products" onClick={(e) => toggleDropdown(e, "products")}>
              Products <i className="fas fa-chevron-down nav-icon"></i>
            </Link>
            <ul className="dropdown-menu">
              <li
                className={`dropdown-submenu ${openDropdowns.includes("knx") ? "dropdown-open" : ""}`}
              >
                <a href="#" onClick={(e) => toggleDropdown(e, "knx")}>
                  KNX <i className="fas fa-chevron-right nav-icon"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link href="/actuator">Actuators</Link></li>
                  <li
                    className={`dropdown-submenu ${openDropdowns.includes("push-buttons") ? "dropdown-open" : ""}`}
                  >
                    <a href="#" onClick={(e) => toggleDropdown(e, "push-buttons")}>
                      Push Buttons <i className="fas fa-chevron-right nav-icon"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link href="/photon">Photon Panels</Link></li>
                      <li><Link href="/quark">Quark Panels</Link></li>
                      <li><Link href="/cubit">Cubit Panels</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/ir-emitter">IR Emitters</Link></li>
                </ul>
              </li>
              <li
                className={`dropdown-submenu ${openDropdowns.includes("wifi") ? "dropdown-open" : ""}`}
              >
                <a href="#" onClick={(e) => toggleDropdown(e, "wifi")}>
                  WiFi <i className="fas fa-chevron-right nav-icon"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link href="/wifi-panel-3.5inch">3.5 Inch Panel</Link></li>
                  <li><Link href="/wifi-panel-4inch">4 Inch Panel</Link></li>
                  <li><Link href="/wifi-panel">8 Inch Panel</Link></li>
                  <li><Link href="/wifi-panel-10inch">10 Inch Panel</Link></li>
                </ul>
              </li>
              <li><Link href="/products#zigbee">Zigbee</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/how-to-buy" className={isActive("/how-to-buy") ? "active" : ""}>
              How to Buy
            </Link>
          </li>
          <li>
            <Link href="/whats-new" className={isActive("/whats-new") ? "active" : ""}>
              What's New
            </Link>
          </li>
          <li
            className={`dropdown ${openDropdowns.includes("downloads") ? "dropdown-open" : ""}`}
          >
            <Link href="/downloads" onClick={(e) => toggleDropdown(e, "downloads")}>
              Downloads <i className="fas fa-chevron-down nav-icon"></i>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <a href="/assets/downloads/pricelists/KNX_Photon_pricelist.pdf" target="_blank">
                  Photon Pricelist
                </a>
              </li>
              <li>
                <a href="/assets/downloads/pricelists/KNX_Quark_series_pricelist.pdf" target="_blank">
                  Quark Pricelist
                </a>
              </li>
              <li>
                <a href="/assets/downloads/pricelists/KNX_Cubit_series_pricelist.pdf" target="_blank">
                  Cubit Pricelist
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact-us" className={isActive("/contact-us") ? "active" : ""}>
              Contact Us
            </Link>
          </li>
        </ul>
        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          onClick={() => setNavOpen(!navOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
