import Layout from "components/Layout";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("pages/Home/HomePage"));
const TeachersPage = lazy(() => import("pages/Teachers/TeachersPage"));
const FavoritesPage = lazy(() => import("pages/Favorites/FavoritesPage"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
