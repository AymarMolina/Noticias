import Navbar from "../components/Navbar";
import NewsGrid from "../components/NewsGrid";
import { Metadata } from "next";

// ✅ `params` ahora se usa con async/await
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `Noticias de ${category} | The News Project`,
    description: `Últimas noticias de ${category} actualizadas al instante.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  return (
    <>
      <Navbar />
      <main>
        <section className="text-center py-10 border-b bg-[#fefefe]">
          <h2 className="text-4xl font-serif font-bold capitalize text-gray-900">
            {category}
          </h2>
          <p className="text-gray-500 mt-2">
            Últimas noticias sobre {category}
          </p>
        </section>

        <NewsGrid category={category} />
      </main>

      <footer className="text-center text-gray-500 text-sm py-6 border-t bg-white">
        © {new Date().getFullYear()} The News Project
      </footer>
    </>
  );
}
