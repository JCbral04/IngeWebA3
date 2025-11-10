import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import PaginaRastreo from "./pages/PaginaRastreo";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/*  Barra de navegación */}
        <nav className="bg-blue-600 text-white p-4 flex justify-center gap-6">
          <Link to="/admin" className="hover:underline">
            Panel de Administración
          </Link>
          <Link to="/rastreo" className="hover:underline">
            Página de Rastreo
          </Link>
        </nav>

        {/*  Rutas */}
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/rastreo" element={<PaginaRastreo />} />
          <Route
            path="/"
            element={
              <div className="text-center mt-20">
                <h1 className="text-3xl font-bold text-blue-700">
                  Bienvenido a Repartos Rápidos
                </h1>
                <p className="text-gray-600 mt-4">
                  Selecciona una opción del menú superior.
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
