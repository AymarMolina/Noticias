"use client";
import Link from "next/link";

export default function Navbar() {
  const categories = [
    "general",
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  return (
    <nav className="flex flex-col items-center justify-center py-6 border-b bg-white sticky top-0 z-50 shadow-sm">
      <Link
        href="/"
        className="font-serif text-3xl md:text-4xl font-bold text-red-700 mb-3"
      >
        Noticias Mundo
      </Link>

      <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-700 font-medium">
        {categories.map((cat) => (
          <li key={cat}>
            <Link
              href={`/${cat}`}
              className="hover:text-red-700 transition capitalize"
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
