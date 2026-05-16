import Link from "next/link";

export default function Actuator() {
  return (
    <main>

    
    <main className="inner-page">
        <section className="page-hero">
            <div className="container">
                <div className="badge">Hardware Accessories</div>
                <h1>16-Channel Actuators</h1>
                <p>Model MX1610 modular installation actuator for robust multi-channel output control.</p>
            </div>
        
            <div className="container"
                style={{"display":"flex","flexDirection":"column","gap":"3rem","alignItems":"center","maxWidth":"1100px","margin":"3rem auto 0"}}>
                <img src="/assets/img/knx_products/20240708074148_5450.jpg" alt="16-Channel Actuator"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
            </div>
        </section>

        

        <section className="page-section">
            <div className="container section-header section-header-left">
                <h3>Technical Specifications</h3>
                <p>Hardware characteristics and features for system integrators.</p>
            </div>
            
            <div className="container glass-stats specs-table-wrapper"
                style={{"padding":"0","maxWidth":"900px","margin":"0 auto","overflow":"hidden","background":"var(--card-bg)","border":"1px solid var(--border-color)","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-sm)"}}>
                <table className="specs-table">
                    <tbody>
                        <tr>
                            <td className="spec-label">Model</td>
                            <td>MX1610</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Bus current</td>
                            <td>≤20mA</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Size</td>
                            <td>218mm x 90mm x 64mm 16/24 Circuits (MX1610)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section className="page-section section-bg">
            <div className="container cta-banner">
                <div>
                    <h3>Ready to upgrade your spaces?</h3>
                    <p>Contact our experts to find the right hardware configurations for your automation logic.</p>
                </div>
                <Link href="/contact-us" className="btn btn-primary">Contact Us</Link>
            </div>
        </section>
    </main>

    

    

    </main>
  );
}
