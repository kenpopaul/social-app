import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import "./styles.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        {" "}
        {/* Add the wrapper div */}
        <div className="app">
          {" "}
          {/* Add the app container */}
          <Sidebar />
          <div className="content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
