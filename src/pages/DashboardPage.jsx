import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../components/Dashboard/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";

function DashboardPage() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated && isLoading) {
    return (
      <div className="spinner text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    );
  }

  return (
    isAuthenticated ? (
      <>
        <Navbar />
        <Dashboard />
      </>
    ) : (
      <>
      <Navbar />
      <p className="p-3">No tienes permisos</p>
      </>
    )
  );
}

export default DashboardPage;