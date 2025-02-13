export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/bg.jpeg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="text-center text-4xl font-bold text-white border-4 border-white p-6 rounded-lg font-serif hover:border-yellow-400 transition-all duration-300">
        <a
          href="/menu">
        order
        </a>
      </div>
    </div>
  );
}