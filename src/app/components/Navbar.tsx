"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      padding: "20px 0",
      background: "#111",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
      fontWeight: "bold",
      fontSize: "1.15rem",
      letterSpacing: "1px"
    }}>
      <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
      <Link href="/products" style={{ color: "#fff", textDecoration: "none" }}>Products</Link>
      <Link href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
      {/* Add more links if needed */}
    </nav>
  );
}
