import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="flex-none">hamburger menu click here</p>
        <h1 className="text-[64px] pb-96 animate-bounce	bold text-green-500">
          Welcome to 5 star delivery service
        </h1>
        <h2 className="animate-pulse">
          100% satisfaction. Best customer rating in the industry.
        </h2>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-xs">
        <Link
          className="flex items-center gap-2 hover:text-white hover:cursor-not-allowed"
          href="/homepage"
          aria-label="Link to feedback page"
        >
          feedback?
        </Link>
      </footer>
    </div>
  );
}
