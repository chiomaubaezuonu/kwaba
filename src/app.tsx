import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./GlobalContext";
import Home from "./pages/Dashboard";
import Applications from "./pages/Applications";
import RenterScreening from "./pages/RenterScreening";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import ApplicantDetails from "./components/ApplicantDetails";
import ApplicationDetail from "./pages/ApplicationDetails";
import Transactions from "./pages/Transactions";
import TransactionDetails from "./pages/TransactionDetails";
import RenterScreeningVerify from "./pages/RenterScreeningVerify";
import ApplicationDetails from "./pages/ApplicationDetails";
import RenterScreeningDetails from "./pages/RenterScreeningDetails";


function App() {
  return (
    <GlobalProvider>
      <Header />
       <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications/:id" element={<ApplicationDetails />} />
        <Route path="/renter-screening" element={<RenterScreening />} />
        <Route path="/renter-screening/:id" element={<RenterScreeningDetails />} />
        <Route path="/renter-screening/:id/verify" element={<RenterScreeningVerify />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactions/:id" element={<TransactionDetails />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
