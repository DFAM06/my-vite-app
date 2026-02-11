import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";
import { getMovies } from "../../Servicies/movies.service";
import { MoviesList } from "./MoviesList";

export function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getMovies()
      .then(setMovies)
      .catch((e: unknown) => {
        const message = e instanceof Error ? e.message : "Error cargando películas";
        setError(message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen w-screen bg-[#070B16]">
      
      <div className="w-full bg-[#0B122A] px-6 py-5 border-b border-[#1E2A54]">
        
        <Link
          to="/"
          className="inline-block bg-[#1B2A5B] text-[#EAF0FF] font-semibold px-5 py-3 rounded-md border border-[#2B3F86] hover:bg-[#22357A] active:bg-[#16224A] transition"
        >
          Volver a la página principal
        </Link>

      </div>
      
      <div className="w-full bg-[#0B122A] px-6 py-5 border-b border-[#1E2A54]">
        {loading && <p className="text-[#EAF0FF]">Cargando...</p>}

        {!loading && error && <p className="text-red-600 font-medium">{error}</p>}

        {!loading && !error && <MoviesList movies={movies} />}
      </div>
    </div>
  );
}
