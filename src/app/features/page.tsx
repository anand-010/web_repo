import Link from "next/link";

export default function Features() {
  return (
    <main>

    

    <main className="inner-page">
        <section className="page-hero">
            <div className="container">
                <div className="badge">Why Unify</div>
                <h1>Technology-backed automation with practical support</h1>
                <p>This page takes the “what makes us different” and technology sections from the old homepage and
                    turns them into a dedicated features page.</p>
            </div>
        </section>

        <section className="page-section">
            <div className="container section-header">
                <h3>What Makes Us Different</h3>
                <p>These unique advantages define our commitment to premium automation solutions.</p>
            </div>
            <div className="container features-grid">
                <div className="feature-card">
                    <div className="feature-icon"><i className="fas fa-award"></i></div>
                    <h4>Long Warranty Horizon</h4>
                    <p>5 years assured warranty backed by a strong confidence in product performance and reliability.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><i className="fas fa-network-wired"></i></div>
                    <h4>Multi-Brand Compatibility</h4>
                    <p>KNX and Tuya foundations reduce lock-in and improve interoperability with broader automation
                        ecosystems.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><i className="fas fa-comments"></i></div>
                    <h4>Consultation First</h4>
                    <p>We do not just sell devices. We support design, planning, and deployment choices for projects.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><i className="fas fa-life-ring"></i></div>
                    <h4>Extended Service Support</h4>
                    <p>Repair or replacement support remains available long after the initial installation period.</p>
                </div>
            </div>
        </section>

        <section className="page-section section-bg">
            <div className="container section-header">
                <h3>Technology Stack</h3>
                <p>The old homepage explained the platform strategy. This page keeps that narrative intact.</p>
            </div>
            <div className="container technology-grid">
                <div className="tech-card">
                    <h4>KNX Wired Automation</h4>
                    <p>KNX is widely recognized as the gold standard for wired automation. It enables dependable control
                        across lighting, curtains, HVAC, sensors, and room scenes while remaining compatible with a
                        global network of certified products.</p>
                </div>
                <div className="tech-card">
                    <h4>Tuya Wireless Automation</h4>
                    <p>Tuya gives us a flexible wireless layer suited for smart homes and building automation where fast
                        deployment and app-centric control matter. It also keeps devices accessible from a unified
                        platform.</p>
                </div>
            </div>
        </section>

        <section className="page-section">
            <div className="container solution-strip">
                <div className="solution-card">
                    <h4>Residential</h4>
                    <p>Villas, apartments, luxury homes, and retrofit-ready smart rooms.</p>
                </div>
                <div className="solution-card">
                    <h4>Office</h4>
                    <p>Lighting scenes, meeting spaces, energy logic, and control simplicity.</p>
                </div>
                <div className="solution-card">
                    <h4>Project Support</h4>
                    <p>Specification guidance, finish selection, and implementation coordination.</p>
                </div>
            </div>
        </section>
    </main>

    

    

    </main>
  );
}
