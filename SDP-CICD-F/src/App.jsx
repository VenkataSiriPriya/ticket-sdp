import { BrowserRouter } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import CustomerNavBar from "./customer/CustomerNavBar";
import ManagerNavBar from "./manager/ManagerNavBar";
import { AuthProvider, useAuth } from "./contextapi/AuthContext";
import Footer from "./main/Footer";
// import Movies from "./manager/AddMovie";

function AppContent() 
{
  const { isAdminLoggedIn, isCustomerLoggedIn, isManagerLoggedIn } = useAuth();

  return (
    <div>
      <BrowserRouter>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isCustomerLoggedIn ? (
          <CustomerNavBar />
        ) : isManagerLoggedIn ? (
          <ManagerNavBar />
        ) : (
          <MainNavBar />
        )}
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
      
    </AuthProvider>
  );
}

export default App;