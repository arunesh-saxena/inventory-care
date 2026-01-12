import React from 'react';
import { Link } from 'react-router-dom';

const container: React.CSSProperties = {
  maxWidth: 900,
  margin: '40px auto',
  padding: '24px',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  color: '#222',
  lineHeight: 1.5,
};

const headerStyle: React.CSSProperties = {
  marginBottom: 24,
};

const leadStyle: React.CSSProperties = {
  marginTop: 8,
  color: '#555',
};

const sectionStyle: React.CSSProperties = {
  background: '#fff',
  borderRadius: 8,
  padding: 18,
  boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
  marginBottom: 16,
};

const listStyle: React.CSSProperties = {
  paddingLeft: 20,
  marginTop: 8,
};

const footerStyle: React.CSSProperties = {
  marginTop: 20,
  color: '#666',
  fontSize: 14,
};

const About: React.FC = () => {
  return (
    <main className="about-us" style={container} aria-labelledby="about-title">
      <header style={headerStyle}>
        <h1 id="about-title">About Inventory Care</h1>
        <p style={leadStyle}>
          Inventory Care helps teams track products, stock levels, and movements
          with a simple, reliable interface built for real workflows.
        </p>
      </header>

      <section style={sectionStyle} aria-labelledby="what-we-do">
        <h2 id="what-we-do">What we do</h2>
        <p>
          We provide a small, focused inventory management experience that
          emphasizes accuracy, auditability, and easy integration with existing
          systems.
        </p>

        <ul style={listStyle}>
          <li>Real-time stock tracking</li>
          <li>Audit logs for inventory changes</li>
          <li>CSV import/export and integrations</li>
        </ul>
      </section>

      <section style={sectionStyle} aria-labelledby="values">
        <h2 id="values">Our values</h2>
        <ul style={listStyle}>
          <li>Accuracy first — reduce mistakes that cost time and money</li>
          <li>Simple UX — keep common tasks fast and clear</li>
          <li>Composable — integrate with your tools and workflows</li>
        </ul>
      </section>

      <section style={sectionStyle} aria-labelledby="contact">
        <h2 id="contact">Contact & contribute</h2>
        <p>
          Questions or feedback? Open an issue or reach out to the team.
          Contributions and improvements are welcome — small changes make a big
          difference.
        </p>
      </section>

      <footer style={footerStyle}>
        <Link to="/" aria-label="Go to home">
          ← Back to home
        </Link>
      </footer>
    </main>
  );
};

export default About;
