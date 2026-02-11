import type { Movie } from "../../models/movie.model";
import { MovieCard } from "./MovieCard";

export function MoviesList({ movies }: { movies: Movie[] }) {
  
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
