import Navbar from "./components/Navbar";
import NewsGrid from "./components/NewsGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="text-center py-10 border-b bg-[#fefefe]">
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Ultimas portadas
          </h2>
          <p className="text-gray-500 mt-2">
            Mantente informado de lo ultimo que sucede en el mundo
          </p>
        </section>

        <NewsGrid category="general" />
      </main>

      <footer className="text-center text-gray-500 text-sm py-6 border-t bg-white">
        © {new Date().getFullYear()} Noticias — Built with Next.js & Tailwind
      </footer>
    </>
  );
}
