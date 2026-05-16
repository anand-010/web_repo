import Link from "next/link";

export default function Products() {
  return (
    <main>

    

    <main className="inner-page">
        <section className="page-hero">
            <div className="container">
                <div className="badge">Product Catalogue</div>
                <h1>Panels, sensors and automation hardware</h1>
                <p>Explore our comprehensive product catalogue featuring premium panel designs, robust hardware, and
                    reliable specifications tailored for modern spaces.</p>
            </div>
        </section>

        <section className="page-section">
            <div className="container section-header">
                <h3>Featured Series</h3>
                <p>Welcome to our comprehensive selection of premium KNX and Tuya products representing reliable home
                    automation.</p>
            </div>
            <div className="container catalog-grid">
                <article className="catalog-card" id="photon">
                    <div className="catalog-visual photon-surface"
                        style={{"overflow":"hidden","padding":"1rem","display":"flex","alignItems":"center","justifyContent":"center","background":"rgba(128, 138, 150, 0.05)"}}>
                        <img src="/assets/img/knx_products/20231102081044_8605.png" alt="KNX Photon Panels"
                            style={{"width":"100%","height":"auto","objectFit":"contain","maxHeight":"200px"}} />
                    </div>
                    <h4>KNX Photon Panels</h4>
                    <p>Plastic tactile-switch panels in black, gray, and champagne variants.</p>
                    <ul className="detail-list">
                        <li>Type: 1 / 2 / 3 / 4 / 6 push buttons</li>
                        <li>Backlight: White on / orange off</li>
                        <li>Protocol: KNX</li>
                        <li>Size: 86 x 86 mm</li>
                        <li>Power: 24V DC</li>
                    </ul>
                </article>
                <article className="catalog-card" id="quark">
                    <div className="catalog-visual quark-surface"
                        style={{"overflow":"hidden","padding":"1rem","display":"flex","alignItems":"center","justifyContent":"center","background":"rgba(128, 138, 150, 0.05)"}}>
                        <img src="/assets/img/knx_products/20231020085419_2761.png" alt="KNX Quark Panels"
                            style={{"width":"100%","height":"auto","objectFit":"contain","maxHeight":"200px"}} />
                    </div>
                    <h4>KNX Quark Panels</h4>
                    <p>Premium aluminum and stainless steel finish panels with broad sprayed and brushed options.</p>
                    <ul className="detail-list">
                        <li>Type: 1 to 8 push buttons</li>
                        <li>Material: Aluminum and stainless steel</li>
                        <li>Switch style: Tact switch</li>
                        <li>Protocol: KNX</li>
                        <li>Size: 86 x 86 mm</li>
                    </ul>
                </article>
                <article className="catalog-card" id="cubit">
                    <div className="catalog-visual cubit-surface"
                        style={{"overflow":"hidden","padding":"1rem","display":"flex","alignItems":"center","justifyContent":"center","background":"rgba(128, 138, 150, 0.05)"}}>
                        <img src="/assets/img/knx_products/20231017080744_6276.png" alt="KNX Cubit Panels"
                            style={{"width":"100%","height":"auto","objectFit":"contain","maxHeight":"200px"}} />
                    </div>
                    <h4>KNX Cubit Panels</h4>
                    <p>Metal panel series for premium interiors with sprayed, brushed, and frosted finishes.</p>
                    <ul className="detail-list">
                        <li>Type: 1 / 2 / 3 / 4 / 6 push buttons</li>
                        <li>Material: Aluminum and stainless steel</li>
                        <li>Backlight: White on / orange off</li>
                        <li>Protocol: KNX</li>
                        <li>Size: 86 x 86 mm</li>
                    </ul>
                </article>
            </div>
        </section>

        <section className="page-section section-bg">
            <div className="container section-header">
                <h3>Automation Devices</h3>
                <p>Support devices previously listed across separate legacy pages.</p>
            </div>
            <div className="container auxiliary-grid">
                <article className="aux-card">
                    <div
                        style={{"marginBottom":"1.5rem","borderRadius":"var(--border-radius-md)","overflow":"hidden","background":"white"}}>
                        <img src="/assets/img/knx_products/20240708074148_5450.jpg" alt="16CH Actuator"
                            style={{"width":"100%","height":"180px","objectFit":"cover"}} />
                    </div>
                    <h4>16CH Actuator</h4>
                    <p>Model MX1610 modular installation actuator for multi-channel output control.</p>
                    <ul className="detail-list">
                        <li>Bus current: ≤20mA</li>
                        <li>Size: 218mm x 90mm x 64mm</li>
                        <li>Circuits: 16 / 24</li>
                    </ul>
                </article>
                <article className="aux-card">
                    <div
                        style={{"marginBottom":"1.5rem","borderRadius":"var(--border-radius-md)","overflow":"hidden","background":"white"}}>
                        <img src="/assets/img/042518040010_0_3_580x.jpg" alt="PIR Motion Sensor"
                            style={{"width":"100%","height":"180px","objectFit":"cover"}} />
                    </div>
                    <h4>PIR Motion Sensor</h4>
                    <p>Compact KNX ceiling sensor for occupancy-driven automation logic and scene triggers.</p>
                    <ul className="detail-list">
                        <li>KNX bus current: ≤10mA</li>
                        <li>Product size: 60 x 45 mm</li>
                        <li>Hole size: 46 to 52 mm</li>
                    </ul>
                </article>
                <article className="aux-card">
                    <div
                        style={{"marginBottom":"1.5rem","borderRadius":"var(--border-radius-md)","overflow":"hidden","background":"white"}}>
                        <img src="/assets/img/knx_products/ebcfa0_b54140fe16d14a98bdf53c9025fffadb~mv2_d_2560_1920_s_2.webp"
                            alt="IR Transmitter" style={{"width":"100%","height":"180px","objectFit":"contain"}} />
                    </div>
                    <h4>IR Transmitter</h4>
                    <p>Multi-channel infrared control device for integrating legacy appliances into smart systems.</p>
                    <ul className="detail-list">
                        <li>Model: TR110</li>
                        <li>Bus current: ≤10mA</li>
                        <li>Channels: 4</li>
                        <li>Codes per channel: 64</li>
                    </ul>
                </article>
            </div>
        </section>

        <section className="page-section">
            <div className="container cta-banner">
                <div>
                    <h3>Need help choosing the right series?</h3>
                    <p>Use the contact page for technical guidance, finish options, and project-level consultation.</p>
                </div>
                <Link href="/contact-us" className="btn btn-primary">Talk To Us</Link>
            </div>
        </section>
    </main>

    

    

    </main>
  );
}
