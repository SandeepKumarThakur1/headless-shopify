import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-700 text-white px-6">
      {/* Animated 404 */}
      <h1 className="text-[10rem] md:text-[12rem] font-extrabold animate-bounce">
        404
      </h1>
      
      <p className="text-xl md:text-2xl font-semibold mb-8 text-center max-w-lg">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Go Back Home Button */}
      <Link
        href="/"
        className="px-8 py-4 bg-white text-black font-bold rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
      >
        Go Back Home
      </Link>

      {/* Floating decorative circles */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-white/10 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-white/30 rounded-full animate-bounce"></div>
    </div>
  );
}
