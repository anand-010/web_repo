import Link from "next/link";

export default function FourTouchWifiSwitch() {
  return (
    <main>
        <main className="inner-page">
            <section className="page-hero">
                <div className="container">
                    <div className="badge">WiFi Products</div>
                    <h1>4 Touch WiFi Switch</h1>
                    <p>Tempered glass panel smart touch switch for seamless home light remote control.</p>
                </div>
            
                <div className="container" style={{"display":"flex","flexDirection":"column","gap":"3rem","alignItems":"center","maxWidth":"1100px","margin":"3rem auto 0"}}>
                    <img src="/assets/img/knx_products_large/4touchwifi/Hc3fda035634b43c7bf09b50e204ce6310.jpg_960x960q80.avif" alt="4 Touch WiFi Switch Main"
                        style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                </div>
            </section>

            <section className="page-section section-bg">
                <div className="container section-header">
                    <h3>Highlights</h3>
                    <p>Experience reliable automation with WiFi connectivity, built with an elegant tempered glass finish.</p>
                </div>
                <div className="container" style={{"display":"flex","gap":"2rem","flexWrap":"wrap","justifyContent":"center","marginBottom":"4rem"}}>
                    <article className="glass-stats" style={{"flex":"1","minWidth":"300px","padding":"2rem"}}>
                        <h4>Key Features</h4>
                        <ul className="detail-list" style={{"marginTop":"1rem"}}>
                            <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check" style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>Tempered Glass Panel</li>
                            <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check" style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>500,000 Times Mechanical Life</li>
                            <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check" style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>CE RoHS Certified</li>
                            <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check" style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>EU Standard Design</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="page-section">
                <div className="container section-header section-header-left">
                    <h3>Technical Specifications</h3>
                    <p>Hardware characteristics and features for system integrators.</p>
                </div>
                
                <div className="container glass-stats specs-table-wrapper" style={{"padding":"0","maxWidth":"900px","margin":"0 auto","overflow":"hidden","background":"var(--card-bg)","border":"1px solid var(--border-color)","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-sm)"}}>
                    <table className="specs-table">
                        <tbody>
                            <tr><td className="spec-label">Product Name</td><td>Touch Switch</td></tr>
                            <tr><td className="spec-label">Model Number</td><td>S1-401</td></tr>
                            <tr><td className="spec-label">Brand Name</td><td>Bingoelec</td></tr>
                            <tr><td className="spec-label">Voltage</td><td>110-250V 50-60HZ</td></tr>
                            <tr><td className="spec-label">Max. Voltage</td><td>220V-250V</td></tr>
                            <tr><td className="spec-label">Max. Current</td><td>10A</td></tr>
                            <tr><td className="spec-label">Watts</td><td>500W/gang</td></tr>
                            <tr><td className="spec-label">Gang</td><td>3gang 1 way</td></tr>
                            <tr><td className="spec-label">Network</td><td>Other</td></tr>
                            <tr><td className="spec-label">Material</td><td>Tempered Glass Panel</td></tr>
                            <tr><td className="spec-label">Type</td><td>EU Standard</td></tr>
                            <tr><td className="spec-label">Size</td><td>86*86mm</td></tr>
                            <tr><td className="spec-label">Mechanical Life</td><td>500,000 times</td></tr>
                            <tr><td className="spec-label">Certificate</td><td>CE RoHS</td></tr>
                            <tr><td className="spec-label">Place of Origin</td><td>ZHE</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="page-section section-bg">
                <div className="container section-header">
                    <h3>Product Walkthrough</h3>
                    <p>Explore the visual details and variations.</p>
                </div>
                <div className="container" style={{"display":"flex","flexDirection":"column","gap":"3rem","alignItems":"center","maxWidth":"1100px","margin":"0 auto"}}>
                    <img src="/assets/img/knx_products_large/4touchwifi/Hbf761d5f7f404fae814f8063a0c5bc795.jpg_960x960q80.avif" alt="4 Touch WiFi Switch Secondary View" style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                    <img src="/assets/img/knx_products_large/4touchwifi/Hbfefd41745214334910a2fd73846e7127.jpg_960x960q80.avif" alt="4 Touch WiFi Switch Detail View" style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                    <img src="/assets/img/knx_products_large/4touchwifi/Hf68c12ec947d4ce8ae8c69103ac108d9G.jpg_960x960q80.avif" alt="4 Touch WiFi Switch Features" style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
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
