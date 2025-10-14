"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string; // Add category!
};

const productsData: Product[] = [
  { id: 1, name: "Lipstick", price: 20, image: "/lipstick.jpg", category: "Lip" },
  { id: 2, name: "Perfume", price: 50, image: "/perfume.jpg", category: "Perfume" },
  { id: 3, name: "Eyeliner", price: 15, image: "/eyeliner.jpg", category: "Eye" },
  { id: 4, name: "Foundation", price: 30, image: "/foundation.jpg", category: "Face" },
  { id: 5, name: "Mascara", price: 28, image: "/Mascara.jpg", category: "Eye" },
  { id: 6, name: "Lip Contour", price: 18, image: "/Lip Contour.jpg", category: "Lip" },
  { id: 7, name: "Gloss Bomb", price: 30, image: "/Gloss Bomb.jpg", category: "Lip" },
  { id: 8, name: "Eyelash Curler", price: 9, image: "/Eyelash Curler.jpg", category: "Eye" },
  { id: 9, name: "Lipstick", price: 20, image: "/lipstick.jpg", category: "Lip" },
  { id: 10, name: "Perfume", price: 50, image: "/perfume.jpg", category: "Perfume" },
  { id: 11, name: "Eyeliner", price: 15, image: "/eyeliner.jpg", category: "Eye" },
  { id: 12, name: "Foundation", price: 30, image: "/foundation.jpg", category: "Face" },
  { id: 13, name: "Mascara", price: 28, image: "/Mascara.jpg", category: "Eye" },
  { id: 14, name: "Lip Contour", price: 18, image: "/Lip Contour.jpg", category: "Lip" },
  { id: 15, name: "Gloss Bomb", price: 30, image: "/Gloss Bomb.jpg", category: "Lip" },
  { id: 16, name: "Eyelash Curler", price: 9, image: "/Eyelash Curler.jpg", category: "Eye" },
  { id: 17, name: "Lipstick", price: 20, image: "/lipstick.jpg", category: "Lip" },
  { id: 18, name: "Perfume", price: 50, image: "/perfume.jpg", category: "Perfume" },
  { id: 19, name: "Eyeliner", price: 15, image: "/eyeliner.jpg", category: "Eye" },
  { id: 20, name: "Foundation", price: 30, image: "/foundation.jpg", category: "Face" },
  { id: 21, name: "Mascara", price: 28, image: "/Mascara.jpg", category: "Eye" },
  { id: 22, name: "Lip Contour", price: 18, image: "/Lip Contour.jpg", category: "Lip" },
  { id: 23, name: "Gloss Bomb", price: 30, image: "/Gloss Bomb.jpg", category: "Lip" },
  { id: 24, name: "Eyelash Curler", price: 9, image: "/Eyelash Curler.jpg", category: "Eye" },
  { id: 25, name: "Lipstick", price: 20, image: "/lipstick.jpg", category: "Lip" },
  { id: 26, name: "Perfume", price: 50, image: "/perfume.jpg", category: "Perfume" },
  { id: 27, name: "Eyeliner", price: 15, image: "/eyeliner.jpg", category: "Eye" },
  { id: 28, name: "Foundation", price: 30, image: "/foundation.jpg", category: "Face" },
  { id: 29, name: "Mascara", price: 28, image: "/Mascara.jpg", category: "Eye" },
  { id: 30, name: "Lip Contour", price: 18, image: "/Lip Contour.jpg", category: "Lip" },
  { id: 31, name: "Gloss Bomb", price: 30, image: "/Gloss Bomb.jpg", category: "Lip" },
  { id: 32, name: "Eyelash Curler", price: 9, image: "/Eyelash Curler.jpg", category: "Eye" },
];

// Get unique categories (with "All" option first)
const categories = ["All", ...Array.from(new Set(productsData.map(p => p.category)))];

export default function ProductsPage() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter by selected category then sort
  const filteredProducts = (selectedCategory === "All"
    ? productsData
    : productsData.filter(p => p.category === selectedCategory)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div style={{ minHeight: "100vh", background: "#fffafd" }}>
      <Navbar />
      <div style={{ padding: "40px max(10vw, 40px)" }}>
        <h1 style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: "bold",
          marginBottom: "30px",
          color: "#c2185b"
        }}>
          Product Catalog
        </h1>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "40px",
          gap: "35px"
        }}>
          {/* Category filter */}
          <div>
            <label style={{ fontWeight: 600, marginRight: "10px" }}>
              Filter by category:
            </label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              style={{
                padding: "7px 15px",
                borderRadius: "20px",
                border: "1px solid #c2185b",
                outline: "none",
                fontWeight: 600,
                color: "#c2185b"
              }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          {/* Sort by price */}
          <div>
            <label style={{ fontWeight: 600, marginRight: "10px" }}>
              Sort by price:
            </label>
            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value as "asc" | "desc")}
              style={{
                padding: "7px 15px",
                borderRadius: "20px",
                border: "1px solid #c2185b",
                outline: "none",
                fontWeight: 600,
                color: "#c2185b"
              }}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
          }}
        >
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "15px",
                background: "#fff",
                boxShadow: "0 2px 10px rgba(100,0,50,0.08)",
                padding: "15px",
                textAlign: "center",
                transition: "box-shadow 0.2s",
                cursor: "pointer"
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px 2px rgba(211, 47, 101, 0.18)";
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 10px rgba(100,0,50,0.08)";
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "170px",
                  objectFit: "cover",
                  marginBottom: "16px",
                  borderRadius: "10px",
                }}
              />
              <h3 style={{ color: "#111", fontWeight: "bold", marginBottom: "8px" }}>{product.name}</h3>
              <p style={{ color: "#c2185b", fontWeight: 700 }}>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
