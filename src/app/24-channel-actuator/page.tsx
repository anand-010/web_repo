import Link from "next/link";

export default function Actuator() {
  return (
    <main>

    
        <main className="inner-page">
            <section className="page-hero">
                <div className="container">
                    <div className="badge">Hardware Accessories</div>
                    <h1>24-Channel Actuator</h1>
                    <p>Modular installation actuator for robust multi-channel output control.</p>
                </div>
            
                <div className="container" style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center", maxWidth: "1100px", margin: "3rem auto 0" }}>
                    <img src="/assets/img/knx_products_large/24_channel_actuator/16813643334527027.png" alt="24-Channel Actuator Main"
                        style={{ width: "100%", height: "auto", borderRadius: "var(--border-radius-lg)", boxShadow: "var(--shadow-lg)" }} />
                </div>
            </section>

            <section className="page-section">
                <div className="container section-header section-header-left">
                    <h3>Functional Description</h3>
                    <p>Key features and capabilities of the 24-Channel Actuator.</p>
                </div>
                
                <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (1) Independently control 24 loop lights/loads;
                        </li>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (2) It has a manual key switch; the relay has a magnetic latching function
                        </li>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (3) Delay on/off function;
                        </li>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (4) Timing off and cycle switch functions;
                        </li>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (5) With on-site save and restore functions;
                        </li>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (6) Status value query and reply function;
                        </li>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (7) Selection function of relay switching state after bus power failure and voltage recovery;
                        </li>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (8) It has scene combination control and scene learning functions;
                        </li>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (9) With logic operation function;
                        </li>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (10) With interlocking group function and channel lock function;
                        </li>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (11) It has the function of recording the number of relay switches;
                        </li>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (12) The 4-way switch execution module has 2-way I/O dry contact input interfaces, which can input control commands such as switches, curtains, dimming, scenes, and fire protection;
                        </li>
                        <li style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                            (13) I/O cable wiring distance: ≤10m
                        </li>
                    </ul>
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
                                <td>21-30 VDC, powered by KNX bus</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Main output</td>
                                <td>24-loop design, each loop 250VA (50/60Hz), Max 10A (resistive load)</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Quiescent current</td>
                                <td>≤12mA</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Charging current</td>
                                <td>≤20mA</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Static power consumption</td>
                                <td>≤360mW</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Charging power consumption</td>
                                <td>≤600mW</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Working temperature</td>
                                <td>-5°~+45°C</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Storage temperature</td>
                                <td>-25°~+55°C</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Transport temperature</td>
                                <td>-25°~+70°C</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Relative humidity</td>
                                <td>Max 90%</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Shell material</td>
                                <td>PA66</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Dimensions (L x W x H)</td>
                                <td>217mm x 90mm x 64mm</td>
                            </tr>
                            <tr>
                                <td className="spec-label">Installation method</td>
                                <td>35mm DIN rail installation</td>
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
