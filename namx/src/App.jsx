import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Loader from "./components/Loader";
import PublicRoute from "./routes/PublicRoute";
// import ProtectedRoute from "./components/ProtectedRoute";

const Index = lazy(() => import("./pages/Index"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const LoginAdmin = lazy(() => import("./pages/admin/LoginAdmin"));

function App() {
  // const { loading } = useSelector((state) => state.alerts);
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Index />
                </PublicRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <PublicRoute>
                  <Dashboard />
                </PublicRoute>
              }
            />
            <Route
              path="/admin/login"
              element={
                <PublicRoute>
                  <LoginAdmin />
                </PublicRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
