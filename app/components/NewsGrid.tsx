"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  title: string;
  description: string;
  url: string;
  image: string;
  source: { name: string };
  publishedAt: string;
}

interface Props {
  category: string;
}

export default function NewsGrid({ category }: Props) {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
        `https://gnews.io/api/v4/top-headlines?lang=en&topic=${category}&token=${process.env.NEXT_PUBLIC_GNEWS_API_KEY}`
        );

        setNews(res.data.articles);
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [category]);

  if (loading)
    return (
      <p className="text-center py-10 text-gray-500 text-lg">
        Cargando noticias...
      </p>
    );

  const hero = news[0];
  const sideNews = news.slice(1, 4);
  const rest = news.slice(4, 10);

  return (
    <div className="px-6 lg:px-16 py-12 max-w-7xl mx-auto">
      {/* SECCIÓN PRINCIPAL */}
      <div className="grid lg:grid-cols-3 gap-10 mb-16">
        {/* Hero grande a la izquierda */}
        {hero && (
          <div className="lg:col-span-2">
            <img
              src={hero.image}
              alt={hero.title}
              className="w-full h-[450px] object-cover rounded-xl shadow-md mb-6"
            />
            <p className="text-sm text-gray-500 mb-2">
              {new Date(hero.publishedAt).toLocaleDateString()}
            </p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4 hover:text-red-700 transition">
              <a href={hero.url} target="_blank" rel="noopener noreferrer">
                {hero.title}
              </a>
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              {hero.description}
            </p>
            <a
              href={hero.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 font-medium hover:underline"
            >
              Leer más →
            </a>
          </div>
        )}

        {/* Noticias pequeñas a la derecha */}
        <div className="space-y-8">
          {sideNews.map((item, i) => (
            <article key={i} className="border-b pb-4 last:border-none">
              <p className="text-xs text-gray-400 mb-1">
                {new Date(item.publishedAt).toLocaleDateString()}
              </p>
              <h3 className="font-serif font-bold text-lg mb-1 hover:text-red-700 transition">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {item.description}
              </p>
              <p className="text-xs text-gray-400 mt-2">{item.source.name}</p>
            </article>
          ))}
        </div>
      </div>

      {/* RESTO DE NOTICIAS EN GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {rest.map((item, i) => (
          <article key={i} className="group cursor-pointer">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg mb-4 object-cover w-full h-56 group-hover:opacity-90 transition"
            />
            <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-red-700 transition">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-3">
              {item.description}
            </p>
            <p className="text-xs text-gray-400">
              {new Date(item.publishedAt).toLocaleDateString()} ·{" "}
              {item.source.name}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
