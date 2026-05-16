import Link from "next/link";

export default function Blogs() {
  return (
    <main>

    

    <main className="inner-page">
        <section className="page-hero">
            <div className="container">
                <div className="badge">Insights</div>
                <h1>Automation notes, platform thinking, and product guidance</h1>
                <p>The legacy blogs page was not implemented. This new page fills that gap with company-relevant
                    editorial content instead of a placeholder.</p>
            </div>
        </section>

        <section className="page-section">
            <div className="container blog-grid">
                <article className="blog-card">
                    <span className="blog-tag">KNX</span>
                    <h3>Why KNX remains the benchmark for premium wired automation</h3>
                    <p>For projects where reliability, interoperability, and long lifecycle support matter, KNX still
                        provides one of the strongest foundations available. It is especially effective when the control
                        system is expected to grow over time.</p>
                    <Link href="/contact-us" className="text-link">Discuss a KNX project</Link>
                </article>
                <article className="blog-card">
                    <span className="blog-tag">Wireless</span>
                    <h3>Where wireless automation fits best in real projects</h3>
                    <p>Wireless automation performs well in upgrades, room-level controls, and app-driven deployments.
                        A practical strategy is choosing wireless where flexibility matters and wired control where
                        permanence matters.</p>
                    <Link href="/contact-us" className="text-link">Ask about wireless options</Link>
                </article>
                <article className="blog-card">
                    <span className="blog-tag">Support</span>
                    <h3>Why service life matters as much as product launch quality</h3>
                    <p>Automation is not a disposable purchase. Long warranty periods, spare support, and engineering
                        continuity directly affect the user experience years after installation.</p>
                    <Link href="/contact-us" className="text-link">Talk to our team</Link>
                </article>
            </div>
        </section>
    </main>

    

    

    </main>
  );
}
