import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="relative min-h-screen w-screen bg-[#070B16] flex flex-col items-center justify-center p-6 overflow-hidden">
      
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/featured/pelicula-9pvmdtvz4cb0xl37.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      <div className="absolute inset-0 bg-[#070B16]/55" />
      
      <h1 className="relative z-10 text-8xl md:text-9xl font-extrabold text-[#EAF0FF] mb-16 tracking-widest">
        CineArce
      </h1>
      
      <Link
        to="/movies"
        className="relative z-10 bg-[#1B2A5B] text-[#EAF0FF] font-semibold px-8 py-6 rounded-md shadow-sm border border-[#2B3F86] hover:bg-[#22357A] active:bg-[#16224A] transition"
      >
        Ir a la sección de películas
      </Link>
    </div>
  );
}
