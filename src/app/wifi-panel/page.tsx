import Link from "next/link";

export default function WifiPanel() {
  return (
    <main>

    
    <main className="inner-page">
        <section className="page-hero">
            <div className="container">
                <div className="badge">WiFi Products</div>
                <h1>8 Inch Smart Control Touch Screen</h1>
                <p>Designed as the central hub for all tuya smart devices, this wall-mounted controller enables seamless
                    automation through the smart life app, bringing your smart home hub right to your fingerprints.</p>
            </div>
        
            <div className="container"
                style={{"display":"flex","flexDirection":"column","gap":"3rem","alignItems":"center","maxWidth":"1100px","margin":"3rem auto 0"}}>
                <img src="/assets/img/61B9FS8ibFL.webp" alt="Smart Control Touch Screen Preview"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
            </div>
        </section>

        <section className="page-section section-bg">

            
        

<div className="container section-header">
                <h3>Highlights</h3>
                <p>Powered by 2GB RAM & 16GB ROM ensuring smooth transitions and lag-free operation for all your smart
                    home applications.</p>
            </div>
            <div className="container"
                style={{"display":"flex","gap":"2rem","flexWrap":"wrap","justifyContent":"center","marginBottom":"4rem"}}>
                <article className="glass-stats" style={{"flex":"1","minWidth":"300px","padding":"2rem"}}>
                    <h4>Key Features</h4>
                    <ul className="detail-list" style={{"marginTop":"1rem"}}>
                        <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check"
                                style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>Wall Mounted & Quick
                            Installation for standard 8 inch boxes</li>
                        <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check"
                                style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>Sound & Media Playback
                            via dual 2W speakers</li>
                        <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check"
                                style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>8 Inch High Resolution
                            Touchscreen (1280x800)</li>
                        <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check"
                                style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>Advanced Voice Control &
                            physical app operations</li>
                        <li style={{"marginBottom":"0.5rem"}}><i className="fas fa-check"
                                style={{"color":"var(--primary-color)","marginRight":"0.5rem"}}></i>Tuya Smart Home Hub
                            Integration</li>
                    </ul>
                </article>
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
                            <td>Vvikizyh7gnt3dxpi</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Manufacturer</td>
                            <td>Vvikizy</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Screen</td>
                            <td>8-inch (1280x800 resolution)</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Performance</td>
                            <td>2GB RAM, 16GB ROM</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Color</td>
                            <td>#611</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Power & Batteries</td>
                            <td>Batteries Not Required. External Power.</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Item Weight</td>
                            <td>2.02 pounds</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Product Dimensions</td>
                            <td>11.02 x 7.08 x 2.75 inches</td>
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
                <img src="/assets/img/61Gl5Yl52ML.webp" alt="Smart Control Environment"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                <img src="/assets/img/61LIUR2FXyL.webp" alt="Touch Screen Interface"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                <img src="/assets/img/61Q8jj-VyKL.webp" alt="Panel Controls"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                <img src="/assets/img/61QvxB+TrnL.webp" alt="Panel Structure"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
                <img src="/assets/img/71nLt-zZirL.webp" alt="Panel Details"
                    style={{"width":"100%","height":"auto","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)"}} />
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
