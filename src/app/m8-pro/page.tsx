import Link from "next/link";

export default function M8Pro() {
  return (
    <main>
        <main className="inner-page">
            <section className="page-hero">
                <div className="container">
                    <div className="badge">WiFi Products</div>
                    <h1>M8 Pro Push Button</h1>
                    <p>Modern smart home touch panel combining Tuya and Zigbee network capabilities for robust automation control.</p>
                </div>
            
                <div className="container" style={{"display":"flex","flexDirection":"column","gap":"3rem","alignItems":"center","maxWidth":"1100px","margin":"3rem auto 0"}}>
                    <img src="/assets/img/knx_products_large/m8pro/H01f51daa42704f528a6763fa8286bc89V.png_960x960q80.avif" alt="M8 Pro Push Button Preview"
                        style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                </div>
            </section>

            <section className="page-section section-bg">
                <div className="container section-header">
                    <h3>Highlights</h3>
                    <p>Experience reliable automation with multi-protocol support and robust mechanical life for everyday use.</p>
                </div>
                <div className="container" style={{"display":"flex","gap":"2rem","flexWrap":"wrap","justifyContent":"center","marginBottom":"4rem"}}>
                    <article className="glass-stats" style={{"flex":"1","minWidth":"300px","padding":"2rem"}}>
                        <h4>Key Features</h4>
                        <ul className="detail-list" style={{"marginTop":"1rem"}}>
                            <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check" style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>Tuya & Smart Life App Compatible</li>
                            <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check" style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>Zigbee & WiFi Dual Networking</li>
                            <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check" style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>Touch Panel Interface</li>
                            <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check" style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>40,000 Times Mechanical Life</li>
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
                            <tr><td className="spec-label">Max. Voltage</td><td>240 V</td></tr>
                            <tr><td className="spec-label">Max. Current</td><td>10A</td></tr>
                            <tr><td className="spec-label">IP Level</td><td>IP11</td></tr>
                            <tr><td className="spec-label">Switch Type</td><td>4-Way</td></tr>
                            <tr><td className="spec-label">Network</td><td>Zigbee, WiFi</td></tr>
                            <tr><td className="spec-label">USB A Output Ports</td><td>0, 1 Port, 2 Ports</td></tr>
                            <tr><td className="spec-label">Material</td><td>Plastic, Metal</td></tr>
                            <tr><td className="spec-label">Mechanical Life</td><td>40,000 times</td></tr>
                            <tr><td className="spec-label">Style</td><td>Modern</td></tr>
                            <tr><td className="spec-label">Feature</td><td>Touch Panel</td></tr>
                            <tr><td className="spec-label">App Support</td><td>Tuya, Smart Life</td></tr>
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
                    <img src="/assets/img/knx_products_large/m8pro/H503f8fc5cf4146b187d0bc1dc34f27123.jpg_960x960q80.avif" alt="M8 Pro Environment" style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                    <img src="/assets/img/knx_products_large/m8pro/H66be92eaf535462197ac843644b4140c1.jpg_960x960q80.avif" alt="M8 Pro Interface" style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                    <img src="/assets/img/knx_products_large/m8pro/H6ec35a0585534c57a942944d02c55ddeV.jpg_960x960q80.avif" alt="M8 Pro Controls" style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                    <img src="/assets/img/knx_products_large/m8pro/Hee625e9abbe14a758b03f9241cd4b8fem.jpg_960x960q80.avif" alt="M8 Pro Details" style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
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
