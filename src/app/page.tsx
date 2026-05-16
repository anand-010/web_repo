import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="badge">Switch On The Future</div>
          <h1>Hom<span style={{ color: "var(--primary-blue)" }}>Controls</span></h1>
          <h2>Wired and wireless automation for modern Indian spaces</h2>
          <p>With more than a decade in home automation, we build elegant KNX and Tuya-ready solutions that combine premium panel design, interoperability, and long-term service support.</p>
          <div className="hero-buttons">
            <Link href="/products" className="btn btn-primary">Explore Products</Link>
            <Link href="/contact-us" className="btn btn-secondary">Request A Callback</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/img/home_image.png" alt="Hom Controls Home Automation" style={{ width: "100%", maxWidth: "550px", objectFit: "cover", borderRadius: "var(--border-radius-lg)", boxShadow: "var(--shadow-lg)" }} />
        </div>
      </section>

      <section className="page-section section-bg">
        <div className="container section-header">
          <h3>Core Advantages</h3>
          <p>What makes us different. Reliable and gorgeous home automation solutions.</p>
        </div>
        <div className="container features-grid">
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
            <h4>5 Years Assured Warranty</h4>
            <p>We stand behind our automation hardware with a warranty structure designed for long-term confidence.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-plug-circle-check"></i></div>
            <h4>Interoperable Systems</h4>
            <p>KNX and Tuya-based platforms make it easier to integrate with wider ecosystems and premium automation brands.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-drafting-compass"></i></div>
            <h4>Solution Consultation</h4>
            <p>From planning to device selection, we help shape reliable automation layouts for real projects.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-screwdriver-wrench"></i></div>
            <h4>10 Years Product Support</h4>
            <p>Even after the warranty period, repair and replacement support remains part of our service promise.</p>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container section-header">
          <h3>Featured Product Lines</h3>
          <p>Our comprehensive selection of premium panels designed for optimal integration and lasting durability.</p>
        </div>
        <div className="container products-grid">
          <div className="product-card">
            <div className="product-badge">Popular</div>
            <div className="product-img-wrapper">
              <img src="/assets/img/knx_products/20231102081044_8605.png" alt="Photon Panels" className="product-mockup" style={{ objectFit: "cover" }} />
            </div>
            <div className="product-info">
              <h4>Photon Panels</h4>
              <p>1 / 2 / 3 / 4 / 6 push button KNX panels with changeable backlight behavior and compact 86x86 sizing.</p>
              <Link href="/photon" className="btn btn-outline">View Details</Link>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="/assets/img/knx_products/20231020085419_2761.png" alt="Quark Panels" className="product-mockup" style={{ objectFit: "cover" }} />
            </div>
            <div className="product-info">
              <h4>Quark Panels</h4>
              <p>Premium aluminum and stainless-steel push button series available in sprayed and brushed finishes.</p>
              <Link href="/quark" className="btn btn-outline">View Details</Link>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="/assets/img/knx_products/20231017080744_6276.png" alt="Cubit Panels" className="product-mockup" style={{ objectFit: "cover" }} />
            </div>
            <div className="product-info">
              <h4>Cubit Panels</h4>
              <p>Elegant metal-finish KNX panels with frosted, brushed, and sprayed color options for premium interiors.</p>
              <Link href="/cubit" className="btn btn-outline">View Details</Link>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="/assets/img/knx_products/20240708074148_5450.jpg" alt="16CH Actuator" className="product-mockup" style={{ objectFit: "cover" }} />
            </div>
            <div className="product-info">
              <h4>16CH Actuator</h4>
              <p>Model MX1610 modular installation actuator for multi-channel output control.</p>
              <Link href="/actuator" className="btn btn-outline">View Details</Link>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="/assets/img/knx_products/ebcfa0_b54140fe16d14a98bdf53c9025fffadb~mv2_d_2560_1920_s_2.webp" alt="IR Transmitter" className="product-mockup" style={{ objectFit: "cover" }} />
            </div>
            <div className="product-info">
              <h4>IR Transmitters</h4>
              <p>Multi-channel infrared control device for integrating legacy appliances into smart systems.</p>
              <Link href="/ir-emitter" className="btn btn-outline">View Details</Link>
            </div>
          </div>
          <div className="product-card">
            <div className="product-badge" style={{ backgroundColor: "var(--primary-color)" }}>Wireless</div>
            <div className="product-img-wrapper" style={{ backgroundColor: "white" }}>
              <img src="/assets/img/61B9FS8ibFL.webp" alt="WiFi Smart Panel" className="product-mockup" style={{ objectFit: "contain" }} />
            </div>
            <div className="product-info">
              <h4>8 Inch WiFi Panel</h4>
              <p>Tuya-ready smart home touch screen for effortless wireless control of modern spaces.</p>
              <Link href="/wifi-panel" className="btn btn-outline">View Details</Link>
            </div>
          </div>

          <div className="product-card">
            <div className="product-badge" style={{ backgroundColor: "var(--primary-color)" }}>Wireless</div>
            <div className="product-img-wrapper" style={{ backgroundColor: "white" }}>
              <img src="/assets/img/knx_products_large/3.5inch_touch/Ha2695b91153943f49ca006e5e420a94c7.jpg_960x960q80.avif" alt="3.5 Inch WiFi Panel" className="product-mockup" style={{ objectFit: "contain" }} />
            </div>
            <div className="product-info">
              <h4>3.5 Inch WiFi Panel</h4>
              <p>Compact Tuya-ready smart home touch screen for seamless wireless control.</p>
              <Link href="/wifi-panel-3.5inch" className="btn btn-outline">View Details</Link>
            </div>
          </div>

          <div className="product-card">
            <div className="product-badge" style={{ backgroundColor: "var(--primary-color)" }}>Wireless</div>
            <div className="product-img-wrapper" style={{ backgroundColor: "white" }}>
              <img src="/assets/img/knx_products_large/3.5inch/Hc018c9674aa840e6bc141fc54909ba399.jpg_960x960q80.avif" alt="4 Inch WiFi Panel" className="product-mockup" style={{ objectFit: "contain" }} />
            </div>
            <div className="product-info">
              <h4>4 Inch WiFi Panel</h4>
              <p>Tuya-ready smart central control panel for comprehensive automation.</p>
              <Link href="/wifi-panel-4inch" className="btn btn-outline">View Details</Link>
            </div>
          </div>

          <div className="product-card">
            <div className="product-badge" style={{ backgroundColor: "var(--primary-color)" }}>Wireless</div>
            <div className="product-img-wrapper" style={{ backgroundColor: "white" }}>
              <img src="/assets/img/knx_products_large/10inch_touch/Hce530fc3ae104580bd4f1744478bfc93G.jpg_960x960q80.avif" alt="10 Inch WiFi Panel" className="product-mockup" style={{ objectFit: "contain" }} />
            </div>
            <div className="product-info">
              <h4>10 Inch WiFi Panel</h4>
              <p>Large format Tuya smart control touch screen for ultimate visibility and control.</p>
              <Link href="/wifi-panel-10inch" className="btn btn-outline">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-bg">
        <div className="container two-column">
          <div>
            <div className="section-header section-header-left">
              <h3>Technologies We Use</h3>
              <p>We use world-wide standard technologies in our products so all your devices will be accessible from a single application.</p>
            </div>
            <div className="stack-list">
              <div className="stack-item">
                <h4>KNX Wired Automation</h4>
                <p>KNX remains the benchmark for reliable wired automation, supported by a global ecosystem of certified manufacturers and interoperable products.</p>
              </div>
              <div className="stack-item">
                <h4>Tuya Wireless Automation</h4>
                <p>Tuya extends the experience into flexible wireless deployments, letting multiple smart devices stay accessible from a unified app environment.</p>
              </div>
            </div>
          </div>
          <div className="glass-stats stats-panel" style={{ display: "flex", flexDirection: "column", gap: "2rem", justifyContent: "center", minWidth: "300px" }}>
            <div className="stat" style={{ borderBottom: "1px solid var(--light-blue)", paddingBottom: "1.5rem" }}>
              <h3>10+</h3>
              <p>Years In Home Automation</p>
            </div>
            <div style={{ display: "flex", gap: "3rem" }}>
              <div className="stat">
                <h3>2</h3>
                <p>Automation Ecosystems</p>
              </div>
              <div className="stat">
                <h3>6</h3>
                <p>Core Product Families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container about-preview" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
          <div className="about-text" style={{ maxWidth: "800px" }}>
            <h3>About Hom<span style={{ color: "var(--primary-blue)" }}>Controls</span></h3>
            <p>We are one of the few manufacturers in India building both wired and wireless home automation products. The company has grown around dependable engineering, premium switch design, and close involvement in solution planning.</p>
            <p>With an experience of a decade in the home automation industry we can provide reliable and gorgeous home automation solutions.</p>
            <Link href="/about-us" className="btn btn-primary">Read About Us</Link>
          </div>
        </div>
      </section>

      <section className="page-section section-bg">
        <div className="container cta-banner">
          <div>
            <h3>Planning a smart home or building automation project?</h3>
            <p>Use the dedicated contact page for inquiries, product discussions, and callback requests.</p>
          </div>
          <Link href="/contact-us" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
