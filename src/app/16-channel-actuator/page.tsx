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
            
                <div className="container" style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center", maxWidth: "1100px", margin: "3rem auto 0" }}>
                    <img src="/assets/img/knx_products_large/16_channel_actuator/H5d0a71838e964d33b22f6e84e9683efcL.jpg_960x960q80.avif" alt="16-Channel Actuator Main"
                        style={{ width: "100%", height: "auto", borderRadius: "var(--border-radius-lg)", boxShadow: "var(--shadow-lg)" }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", width: "100%" }}>
                        <img src="/assets/img/knx_products_large/16_channel_actuator/17316560959000161.jpg" alt="16-Channel Actuator Detail 1"
                            style={{ width: "100%", height: "auto", borderRadius: "var(--border-radius-lg)", boxShadow: "var(--shadow-lg)" }} />
                        <img src="/assets/img/knx_products_large/16_channel_actuator/17316560976235250.jpg" alt="16-Channel Actuator Detail 2"
                            style={{ width: "100%", height: "auto", borderRadius: "var(--border-radius-lg)", boxShadow: "var(--shadow-lg)" }} />
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container section-header section-header-left">
                    <h3>Functional Description</h3>
                    <p>Key features and capabilities of the 16-Channel Actuator.</p>
                </div>
                
                <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <h4 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>Switch Output</h4>
                        <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(1) Independently control 16 loop lamps/loads;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(2) With manual switch control;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(3) With relay magnetic latching function;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(4) With delay on/off function;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(5) It has the function of timing off and cycle switch;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(6) With on-site save and restore functions;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(7) It has the function of status value query and reply;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(8) It has scene combination control and scene learning functions;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(9) With logic operation function;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(10) With interlocking group function and channel lock function;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(11) It has the function of recording the number of relay operations;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(12) It has the function of selecting the relay switch state after bus power failure and voltage recovery;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(13) It has an I/O dry contact input interface, which can input control commands such as switches, curtains, dimming, and scenes, and can directly link fire emergency lighting;</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: "2rem" }}>
                        <h4 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>FCA Output</h4>
                        <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(1) With 4 independent outputs;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(2) With manual switch control;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(3) With relay magnetic latching function;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(4) With delay on/off function;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(5) Control the 4-control and 2-control fan coil units;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(6) It can output heating and cooling according to automatic or manual control, and has the interlock function of heating and cooling;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(7) According to the automatic or manual control of high, medium and low wind speed, it has the function of wind speed interlocking;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(8) Selection function of relay switching state after bus power failure and voltage recovery;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(9) The local wind speed and valve status can be reported;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(10) It has an I/O dry contact input interface, which can input control commands such as switches, curtains, dimming, and scenes, and can directly link fire emergency lighting;</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: "2rem" }}>
                        <h4 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>Curtain Output</h4>
                        <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(1) With 16 independent outputs;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(2) With manual switch control;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(3) Scene combination control function can be set;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(4) With on-site save and restore functions;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(5) Status value query and reply function;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(6) The selection function of the relay switch state after the bus voltage is restored;</li>
                            <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>(7) It is possible to set the time in</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container section-header section-header-left">
                    <h3>Technical Specifications</h3>
                    <p>Hardware characteristics and features for system integrators.</p>
                </div>
                
                <div className="container glass-stats specs-table-wrapper"
                    style={{ padding: "0", maxWidth: "900px", margin: "0 auto", overflow: "hidden", background: "var(--card-bg)", border: "1px solid var(--border-color)", borderRadius: "var(--border-radius-lg)", boxShadow: "var(--shadow-sm)" }}>
                    <table className="specs-table">
                        <tbody>
                            <tr>
                                <td className="spec-label">Bus voltage</td>
                                <td>21-30 VDC</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Quiescent Current</td>
                                <td>≤ 12mA</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Recharging current</td>
                                <td>≤ 20mA</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Static power</td>
                                <td>≤ 360mW</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Charging power consumption</td>
                                <td>≤ 600mW</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Main output</td>
                                <td>24 loops, each loop 250VAC (50/60Hz), Max 10A (resistive load)</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Dimension (Lx W x H)</td>
                                <td>218mm x 90mm x 64mm</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Weight (approx.)</td>
                                <td>0.74KG</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Shell material</td>
                                <td>PA66</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Installation</td>
                                <td>35MM DIN Rail</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Working temperature</td>
                                <td>-5°C…+45°C</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Stock temperature</td>
                                <td>-25°C…+55°C</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Transport temperature</td>
                                <td>-25°C…+70°C</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Relative humidity</td>
                                <td>max 90%</td>
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
