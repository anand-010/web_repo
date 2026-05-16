import Link from "next/link";

export default function Photon() {
  return (
    <main>

    
    <main className="inner-page">
        <section className="page-hero">
            <div className="container">
                <div className="badge">Tactile Push Buttons</div>
                <h1>Photon Panels</h1>
                <p>Plastic tactile-switch panels in black, gray, and champagne variants.</p>
            </div>
        
            <div className="container"
                style={{"display":"flex","flexDirection":"column","gap":"3rem","alignItems":"center","maxWidth":"1100px","margin":"3rem auto 0"}}>
                <img src="/assets/img/knx_products_large/d8/nano-banana-2025-09-10T10-00-40.webp"
                    alt="Photon Series Preview"
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
                            <td>D</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Series</td>
                            <td>Photon</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Type</td>
                            <td>1 / 2 / 3 / 4 / 6 Push Buttons (Changable backlight: white color when turn on, orange
                                color when turn off)</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Material</td>
                            <td>Plastic</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Switch Style</td>
                            <td>Tact Switch</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Color</td>
                            <td>Black | Gray | Champagne</td>
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
                <img src="/assets/img/knx_products_large/d8/20231102081247_1051.webp" alt="Photon Series"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                <img src="/assets/img/knx_products_large/d8/20231102083417_1892.webp" alt="Photon Series Option"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                <img src="/assets/img/knx_products_large/d8/20231102091614_9103.webp" alt="Photon Series Details"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
            </div>
        </section>
        <section className="page-section">
            <div className="container cta-banner">
                <div>
                    <h3>Looking for a different switch style?</h3>
                    <p>Checkout our Quark and Cubit series for aluminum, frosted, and stainless steel finishes.</p>
                </div>
                <Link href="/products" className="btn btn-primary">Back to Catalog</Link>
            </div>
        </section>
    </main>

    

    

    </main>
  );
}
