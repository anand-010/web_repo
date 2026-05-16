import Link from "next/link";

export default function IrEmitter() {
  return (
    <main>

    
    <main className="inner-page">
        <section className="page-hero">
            <div className="container">
                <div className="badge">Hardware Accessories</div>
                <h1>IR Transmitters</h1>
                <p>IR Transmitter has 4 channels, with each channel capable of learning up to 64 functional codes. The
                    IR transmitter is used to control IR devices natively via the KNX system.</p>
            </div>
        
            <div className="container"
                style={{"display":"flex","flexDirection":"column","gap":"3rem","alignItems":"center","maxWidth":"1100px","margin":"3rem auto 0"}}>
                <img src="https://unifylabs.in/assets/img/knx_products/ebcfa0_b54140fe16d14a98bdf53c9025fffadb~mv2_d_2560_1920_s_2.webp"
                    alt="IR Transmitter"
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
                            <td>KNXIR001 / TR110</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Bus current</td>
                            <td>≤10mA</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Number of channels</td>
                            <td>4 channels with 64 functional codes each</td>
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
