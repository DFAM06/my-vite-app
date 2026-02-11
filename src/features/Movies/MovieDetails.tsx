import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Movie } from "../../models/movie.model";
import { getMovieById } from "../../Servicies/movies.service";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    getMovieById(id)
      .then((m) => setMovie(m))
      .catch((e: unknown) => {
        const message = e instanceof Error ? e.message : "Error cargando la película";
        setError(message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen w-screen bg-[#070B16] p-6">
        <p className="text-[#EAF0FF]">Cargando...</p>
      </div>
    );

  }

  if (error) {
    return (
      <div className="min-h-screen w-screen bg-[#070B16] p-6">
        <Link
          to="/movies"
          className="inline-block bg-[#1B2A5B] text-[#EAF0FF] font-semibold px-4 py-2 rounded-md border border-[#2B3F86] hover:bg-[#22357A] active:bg-[#16224A] transition"
        >
          Volver a la sección de películas
        </Link>

        <p className="mt-6 text-red-400 font-medium">{error}</p>
      </div>
    );

  }

  if (!movie) {
    return (
      <div className="min-h-screen w-screen bg-[#070B16] p-6">
        <Link
          to="/movies"
          className="inline-block bg-[#1B2A5B] text-[#EAF0FF] font-semibold px-4 py-2 rounded-md border border-[#2B3F86] hover:bg-[#22357A] active:bg-[#16224A] transition"
        >
          Volver a la sección de películas
        </Link>

        <p className="mt-6 text-[#EAF0FF]">Película no encontrada.</p>
      </div>
    );

  }

  return (
    <div className="min-h-screen w-screen bg-[#070B16] p-6">
      <Link
        to="/movies"
        className="inline-block bg-[#1B2A5B] text-[#EAF0FF] font-semibold px-4 py-2 rounded-md border border-[#2B3F86] hover:bg-[#22357A] active:bg-[#16224A] transition"
      >
        Volver a la sección de películas
      </Link>

      <div className="mt-10 flex flex-col md:flex-row gap-10 items-start">
        
        <div className="w-72 h-[420px] border-2 border-[#1E2A54] overflow-hidden bg-[#0B122A] flex-shrink-0">
          <img
            src={movie.posterUrl}
            alt={`Poster de ${movie.title}`}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-[#EAF0FF] text-xl leading-10">
          <p>
            <span className="font-semibold">Nombre de Película:</span> {movie.title}
          </p>
          <p>
            <span className="font-semibold">Año:</span> {movie.year}
          </p>
          <p>
            <span className="font-semibold">Duración:</span> {movie.duration ?? "No disponible"}
          </p>
          <p>
            <span className="font-semibold">Director:</span> {movie.director ?? "No disponible"}
          </p>
          <p className="max-w-2xl">
            <span className="font-semibold">Género:</span> {movie.genre ?? "No disponible"}
          </p>
          <p className="max-w-2xl">
            <span className="font-semibold">Descripción:</span> {movie.description ?? "No disponible"}
          </p>
          <p className="max-w-2xl">
            <span className="font-semibold">Calificación:</span> {movie.rating ?? "No disponible"} ★
          </p>
        </div>
      </div>
    </div>
  );

}
