import Link from "next/link";

export default function FourGangSwitch() {
  return (
    <main>
        <main className="inner-page">
            <section className="page-hero">
                <div className="container">
                    <div className="badge">WiFi Products</div>
                    <h1>4 Gang Smart Switch</h1>
                    <p>Tuya WiFi 4Gang Hidden Module Switch for seamless home light remote control.</p>
                </div>
            
                <div className="container" style={{"display":"flex","flexDirection":"column","gap":"3rem","alignItems":"center","maxWidth":"1100px","margin":"3rem auto 0"}}>
                    <img src="/assets/img/knx_products_large/4gangwifi/H5e84849a280144d29ec9aa6d9b208dbbJ.jpg_960x960q80.avif" alt="4 Gang Smart Switch Preview"
                        style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                </div>
            </section>

            <section className="page-section section-bg">
                <div className="container section-header">
                    <h3>Highlights</h3>
                    <p>Experience reliable automation with BLE and WiFi connectivity, built with industrial durability.</p>
                </div>
                <div className="container" style={{"display":"flex","gap":"2rem","flexWrap":"wrap","justifyContent":"center","marginBottom":"4rem"}}>
                    <article className="glass-stats" style={{"flex":"1","minWidth":"300px","padding":"2rem"}}>
                        <h4>Key Features</h4>
                        <ul className="detail-list" style={{"marginTop":"1rem"}}>
                            <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check" style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>Smart Life & Tuya App Compatible</li>
                            <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check" style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>BLE & WiFi Dual Networking</li>
                            <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check" style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>Smartphone & Voice Control</li>
                            <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check" style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>500,000 Times Mechanical Life</li>
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
                            <tr><td className="spec-label">Max. Voltage</td><td>90-250V AC 50/60Hz</td></tr>
                            <tr><td className="spec-label">Max. Current</td><td>10A</td></tr>
                            <tr><td className="spec-label">IP Level</td><td>IP53</td></tr>
                            <tr><td className="spec-label">Switch Type</td><td>Single Pole</td></tr>
                            <tr><td className="spec-label">Number of Switches</td><td>4</td></tr>
                            <tr><td className="spec-label">AC Outlets Quantity</td><td>4 Outlets</td></tr>
                            <tr><td className="spec-label">Network</td><td>BLE, WiFi</td></tr>
                            <tr><td className="spec-label">Material</td><td>ABS</td></tr>
                            <tr><td className="spec-label">Mechanical Life</td><td>500,000 times</td></tr>
                            <tr><td className="spec-label">Style</td><td>Minimalist, Industrial</td></tr>
                            <tr><td className="spec-label">Color</td><td>White</td></tr>
                            <tr><td className="spec-label">Control Method</td><td>Smartphone Control + Voice Control</td></tr>
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
                    <img src="/assets/img/knx_products_large/4gangwifi/H7bfc29c599894249a8f0aeaefbd58ac9P.jpg_960x960q80.avif" alt="4 Gang Smart Switch Environment" style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                    <img src="/assets/img/knx_products_large/4gangwifi/Hc59a804c5c094a0fb39bef6da7b20dd6u.jpg_960x960q80.avif" alt="4 Gang Smart Switch Interface" style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                    <img src="/assets/img/knx_products_large/4gangwifi/Hdb5b41f11a0045998ad5bc8873d0f37de.jpg_960x960q80.avif" alt="4 Gang Smart Switch Controls" style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
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
