import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./shared/Footer";
import { NotFound } from "./shared/NotFound";
import { Home } from "./features/Home/Home";
import { Movies } from "./features/Movies/Movies";
import MovieDetails from "./features/Movies/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );

}

export default App;
