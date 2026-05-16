import Link from "next/link";

export default function Gallery() {
  return (
    <main>

    

    <main className="inner-page">
        <section className="page-hero">
            <div className="container">
                <div className="badge">Gallery</div>
                <h1>Spaces shaped by premium automation design</h1>
                <p>The old gallery page existed as a separate destination. This version keeps the page structure while
                    using the new design language to showcase project types and finishes.</p>
            </div>
        </section>

        <section className="page-section">
            <div className="container section-header">
                <h3>Project Inspiration</h3>
                <p>Representative spaces where Hom Controls systems fit naturally.</p>
            </div>
            <div className="container showcase-grid">
                <article className="showcase-card">
                    <div className="showcase-visual visual-one"></div>
                    <h4>Luxury Residences</h4>
                    <p>Minimal wall interfaces, scene-based lighting, and premium finishes for living spaces.</p>
                </article>
                <article className="showcase-card">
                    <div className="showcase-visual visual-two"></div>
                    <h4>Modern Villas</h4>
                    <p>Integrated control for lighting, curtains, climate, and mood settings across larger homes.</p>
                </article>
                <article className="showcase-card">
                    <div className="showcase-visual visual-three"></div>
                    <h4>Office Interiors</h4>
                    <p>Smart switching and intuitive scene control that do not compromise the visual quality of the
                        workspace.</p>
                </article>
                <article className="showcase-card">
                    <div className="showcase-visual visual-four"></div>
                    <h4>Hospitality Spaces</h4>
                    <p>Elegant automation points for guest rooms, lounges, and shared amenity areas.</p>
                </article>
                <article className="showcase-card">
                    <div className="showcase-visual visual-five"></div>
                    <h4>Automation Finish Study</h4>
                    <p>Black, gray, champagne, brushed, and frosted finishes that align with premium interior palettes.
                    </p>
                </article>
                <article className="showcase-card">
                    <div className="showcase-visual visual-six"></div>
                    <h4>Integrated Control Walls</h4>
                    <p>Multi-button panel layouts designed to feel intentional rather than technical.</p>
                </article>
            </div>
        </section>
    </main>

    

    

    </main>
  );
}
