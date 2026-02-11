import { Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";

type Props = { movie: Movie };

export function MovieCard({ movie }: Props) {
  return (
    <Link
      to={`/movies/${movie.id}`}
      className="w-60 border-2 border-black/80 rounded-sm overflow-hidden shadow-sm hover:translate-y-[-2px] transition"
    >
      
      <div className="bg-sky-400 text-black text-center font-semibold px-2 py-2 border-b-2 border-black/80">
        {movie.title}
      </div>
      
      <div className="bg-red-500 h-80 flex items-center justify-center">
        <img
          src={movie.posterUrl}
          alt={`Poster de ${movie.title}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="bg-sky-400 text-black text-center font-semibold px-2 py-2 border-t-2 border-black/80">
        {movie.year}
      </div>
    </Link>
  );
}
