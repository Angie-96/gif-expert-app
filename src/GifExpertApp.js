import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import "animate.css";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Psychedelic",
    "Pastel",
    "Art",
  ]);
  const emojis = [
    "✨",
    "❤️",
    "🔥",
    "🥰",
    "💋",
    "🎃",
    "👾",
    "🎮",
    "🦄",
    "⚡",
    "🌈",
    "👽",
    "🛸",
  ];
  let emoji = emojis[Math.floor(Math.random() * 13)];

  return (
    <div>
      <h2>
        {emoji} Gif Expert App {emoji}
      </h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
