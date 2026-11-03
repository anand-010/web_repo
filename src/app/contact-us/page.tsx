const officeAddress = "No.3/1, 13th ‘A’ Main, 21st Cross Rd, RKK Nagar, BTM Layout 2nd Stage, Bengaluru, Karnataka 560076";
const officeMapUrl = "https://www.google.com/maps/search/?api=1&query=No.3%2F1%2C%2013th%20%E2%80%98A%E2%80%99%20Main%2C%2021st%20Cross%20Rd%2C%20RKK%20Nagar%2C%20BTM%20Layout%202nd%20Stage%2C%20Bengaluru%2C%20Karnataka%20560076";

export default function ContactUs() {
  return (
    <main>

    

    <main className="inner-page">
        <section className="page-hero">
            <div className="container">
                <div className="badge">Contact</div>
                <h1>Let’s discuss your automation requirement</h1>
                <p>The old contact page had a basic form. This version keeps the dedicated page and upgrades the layout
                    while preserving the company email address.</p>
            </div>
        </section>

        <section className="contact">
            <div className="container contact-container">
                <div className="contact-info">
                    <div className="info-card">
                        <div className="icon-circle"><i className="fas fa-envelope"></i></div>
                        <h5>Email Us</h5>
                        <p><a href="mailto:info@unifylabs.in">info@unifylabs.in</a></p>
                    </div>
                    <div className="info-card">
                        <div className="icon-circle"><i className="fas fa-building"></i></div>
                        <h5>Company Focus</h5>
                        <p>Wired and wireless home automation solutions for residential and commercial projects.</p>
                    </div>
                    <div className="info-card">
                        <div className="icon-circle"><i className="fas fa-location-dot"></i></div>
                        <h5>Visit Us</h5>
                        <p>
                            <a href={officeMapUrl} target="_blank" rel="noreferrer" className="address-link">
                                {officeAddress}
                            </a>
                        </p>
                    </div>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Project Type" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Tell us about your requirement" rows={6} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                </form>
            </div>
        </section>
    </main>

    

    

    </main>
  );
}
