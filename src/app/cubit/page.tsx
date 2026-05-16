import Link from "next/link";

export default function Cubit() {
  return (
    <main>

    
    <main className="inner-page">
        <section className="page-hero">
            <div className="container">
                <div className="badge">Metal Series</div>
                <h1>Cubit Panels</h1>
                <p>Metal panel series for premium interiors with sprayed, brushed, and frosted finishes.</p>
            </div>
        
            <div className="container"
                style={{"display":"flex","flexDirection":"column","gap":"3rem","alignItems":"center","maxWidth":"1100px","margin":"3rem auto 0"}}>
                <img src="/assets/img/knx_products_large/z8/cubit_series.webp" alt="Cubit Series Preview"
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
                            <td>Cubit</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Type</td>
                            <td>1/2/3/4/6 Push Buttons (Changable backlight: white color when turn on, orange color when
                                turn off)</td>
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
                            <td>Spray White | Spray Black | Spray Grey | Brushed Grey | Brushed Black | Frosted Silver |
                                Frosted Black</td>
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
                <img src="/assets/img/knx_products_large/z8/20231017075413_4682.jpg" alt="Cubit Series"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                <img src="/assets/img/knx_products_large/z8/20231017075442_0093.jpg" alt="Cubit Series Option"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                <img src="/assets/img/knx_products_large/z8/20231017075500_9261.jpg" alt="Cubit Series Details"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
            </div>
        </section>

        <section className="page-section">
            <div className="container cta-banner">
                <div>
                    <h3>Looking for a different switch style?</h3>
                    <p>Checkout our Quark and Photon series for tactile, brushed, and plastic finishes.</p>
                </div>
                <Link href="/products" className="btn btn-primary">Back to Catalog</Link>
            </div>
        </section>
    </main>

    

    

    </main>
  );
}
