import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(120deg,#fffafd 70%,#f7ecf7 100%)" }}>
      <Navbar />
      <main style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <h1 style={{
          fontSize: "2.2rem",
          color: "#c2185b",
          fontWeight: "bold",
          marginBottom: "14px"
        }}>
          Contact Us
        </h1>
        <p style={{
          fontSize: "1.1rem",
          color: "#444",
          marginBottom: "32px",
          textAlign: "center",
          maxWidth: "540px"
        }}>
          We'd love to hear from you! Whether you have a question about products, pricing, or anything else, our team is ready to answer all your questions.
        </p>
        <form style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          background: "#fff",
          padding: "32px",
          borderRadius: "16px",
          boxShadow: "0 2px 18px 1px #e8cbdb3a",
          minWidth: "310px"
        }}>
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #c2185b77",
              fontSize: "1rem"
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #c2185b77",
              fontSize: "1rem"
            }}
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            required
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #c2185b77",
              fontSize: "1rem"
            }}
          />
          <button
            type="submit"
            style={{
              background: "#c2185b",
              color: "#fff",
              padding: "12px 0",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "1.09rem",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.5px"
            }}
          >
            Send Message
          </button>
        </form>
        <div style={{ marginTop: "34px", color: "#888", fontSize: "0.98rem" }}>
          Or email us at: <a href="mailto:hello@sephora-catalog.com" style={{ color: "#c2185b" }}>hello@sephora-catalog.com</a>
        </div>
      </main>
    </div>
  );
}
