import DashboardHome from "./components/pages/developer/DashboardHome";
import Home from "./components/pages/website/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<h1>404 - Not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
