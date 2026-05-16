import Link from "next/link";

export default function Quark() {
  return (
    <main>

    
    <main className="inner-page">
        <section className="page-hero">
            <div className="container">
                <div className="badge">Series F Push Buttons</div>
                <h1>Quark Panels</h1>
                <p>Premium aluminum and stainless steel finish panels with broad sprayed and brushed options.</p>
            </div>
        
            <div className="container"
                style={{"display":"flex","flexDirection":"column","gap":"3rem","alignItems":"center","maxWidth":"1100px","margin":"3rem auto 0"}}>
                <img src="/assets/img/knx_products_large/rd4/quark_series.webp" alt="Quark Series Preview"
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
                            <td className="spec-label">Line</td>
                            <td>F</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Series</td>
                            <td>Quark</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Type</td>
                            <td>1-8 Push Buttons (Changeable backlight: white color when turn on, orange color when turn
                                off)</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Material</td>
                            <td>Aluminum &amp; Stainless Steel</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Switch Style</td>
                            <td>Tact Switch</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Color</td>
                            <td>Spray White (B04) | Spray Grey (G05) | Spray Champagne (J27) | Spray Black (H06) |
                                Brushed Grey (G08) | Brushed Champagne (J10) | Brushed Black (H12)</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Protocol</td>
                            <td>KNX</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Size (mm)</td>
                            <td>86x86</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Power</td>
                            <td>24V DC</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section className="page-section section-bg">
            <div className="container section-header">
                <h3>Product Walkthrough</h3>
                <p>Explore the visual details and variations.</p>
            </div>
            <div className="container"
                style={{"display":"flex","flexDirection":"column","gap":"3rem","alignItems":"center","maxWidth":"1100px","margin":"0 auto"}}>
                <img src="/assets/img/knx_products_large/rd4/20231020092209_1756.jpg" alt="Quark Series"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                <img src="/assets/img/knx_products_large/rd4/20231020082943_5981.jpg" alt="Quark Series Option"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                <img src="/assets/img/knx_products_large/rd4/20231020082949_4688.jpg" alt="Quark Series Details"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                <img src="/assets/img/knx_products_large/rd4/20231026083433_7848.jpg" alt="Quark Series Build"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                <img src="/assets/img/knx_products_large/rd4/20231020083256_3002.jpg" alt="Quark Series Profile"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
            </div>
        </section>

        <section className="page-section section-bg">
            <div className="container cta-banner">
                <div>
                    <h3>Ready to upgrade your spaces?</h3>
                    <p>Contact our experts to find the right Quark Panels configuration for your next project.</p>
                </div>
                <Link href="/contact-us" className="btn btn-primary">Contact Us</Link>
            </div>
        </section>
    </main>

    

    

    </main>
  );
}
