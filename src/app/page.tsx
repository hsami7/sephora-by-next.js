import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(120deg,#fffafd 70%,#f7ecf7 100%)" }}>
      <Navbar />
      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh"
      }}>
        <h1 style={{
          fontSize: "2.7rem",
          fontWeight: "bold",
          color: "#c2185b",
          marginBottom: "18px",
          letterSpacing: "0.03em"
        }}>
          Welcome to Sephora Catalog!
        </h1>
        <p style={{
          fontSize: "1.3rem",
          color: "#444",
          textAlign: "center",
          marginBottom: "36px",
          maxWidth: 500
        }}>
          Discover <b>lipsticks, perfumes, skincare,</b> and more at incredible prices.<br />
          Compare, sort, and filter products with ease.
        </p>
        <Link href="/products" style={{
          background: "#c2185b",
          color: "#fff",
          padding: "15px 38px",
          borderRadius: "28px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          letterSpacing: "1px",
          textDecoration: "none",
          boxShadow: "0 1px 16px 1px #c2185b22",
          transition: "background 0.18s"
        }}>
          Browse Products
        </Link>
        <div style={{
          marginTop: "58px",
          display: "flex",
          gap: "42px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          <Feature
            icon="💄"
            title="Beauty"
            description="Top trends for lips, eyes, and face"
          />
          <Feature
            icon="🛍️"
            title="Easy Shopping"
            description="Sort & filter to find your favorite products fast"
          />
          <Feature
            icon="🌸"
            title="Fragrance"
            description="Luxury perfume selection for every style"
          />
        </div>
      </main>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div style={{
      minWidth: 200,
      background: "#fff",
      borderRadius: "16px",
      boxShadow: "0 2px 18px 1px #e8cbdb3a",
      padding: "28px 18px 18px 18px",
      textAlign: "center"
    }}>
      <div style={{ fontSize: "2.4rem", marginBottom: "10px" }}>{icon}</div>
      <div style={{ fontWeight: "bold", color: "#c2185b", fontSize: "1.09rem", marginBottom: "6px" }}>{title}</div>
      <div style={{ color: "#444", fontSize: "0.98rem" }}>{description}</div>
    </div>
  );
}
