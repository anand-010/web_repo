import Link from "next/link";

export default function AboutUs() {
  return (
    <main>

    

    <main className="inner-page">
        <section className="page-hero">
            <div className="container">
                <div className="badge">About Us</div>
                <h1>Built around premium automation and long-term support</h1>
                <p>We are one of the few manufacturers in India building both wired and wireless home automation
                    products, with over 10 years of industry experience.</p>
            </div>
        </section>

        <section className="page-section">
            <div className="container about-container">
                <div className="about-text">
                    <h3>Our Story</h3>
                    <p>Hom Controls focuses on control products that feel as refined as the spaces they serve.
                        We are an established product manufacturer and a solution-oriented automation partner dedicated
                        to
                        providing reliable and gorgeous workflows.</p>
                    <p>We work across wired KNX systems and wireless automation deployments, helping clients choose the
                        right fit for their project scale, design language, and technical requirements.</p>
                </div>
                <div className="about-visual">
                    <div className="visual-circle"></div>
                    <div className="visual-circle small"></div>
                    <div className="glass-stats">
                        <div className="stat">
                            <h3>10+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat">
                            <h3>2</h3>
                            <p>Automation Platforms</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="page-section section-bg">
            <div className="container section-header">
                <h3>Leadership</h3>
                <p>Meet the team driving execution and engineering excellence at Hom Controls.</p>
            </div>
            <div className="container leadership-grid">
                <div className="leader-card">
                    <div className="member-avatar large"><i className="fas fa-user-tie"></i></div>
                    <h4>Aswin Ramachandran</h4>
                    <p>Entrepreneur working in the home automation field for the last 8 years.</p>
                </div>
                <div className="leader-card">
                    <div className="member-avatar large"><i className="fas fa-microchip"></i></div>
                    <h4>Anand S</h4>
                    <p>Product developer and technology supporter at Hom Controls.</p>
                </div>
            </div>
        </section>
    </main>

    

    

    </main>
  );
}
