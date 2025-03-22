import Layout from "components/Layout";
import Loader from "components/Loader/Loader";
import PrivateRoute from "components/PrivateRoute";
import ScrollToTopButton from "components/ScrollToTopButton/ScrollToTopButton";
import { FavoritesProvider } from "context/FavoritesProvider";
import { TeachersProvider } from "context/TeachersProvider";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("pages/Home/HomePage"));
const TeachersPage = lazy(() => import("pages/Teachers/TeachersPage"));
const FavoritesPage = lazy(() => import("pages/Favorites/FavoritesPage"));

function App() {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <FavoritesProvider>
      <TeachersProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/teachers" element={<TeachersPage />} />
              <Route path="/favorites" element={<PrivateRoute />}>
                <Route index element={<FavoritesPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      </TeachersProvider>
      <ScrollToTopButton />
      <Toaster position="top-left" reverseOrder={false} />
    </FavoritesProvider>
  );
}

export default App;
