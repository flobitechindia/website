import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./frontend/Header";
import MainContent from "./frontend/MainContent";
import InfoSection from "./frontend/InfoSection";
import Solutions from "./frontend/Solutions";

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header is always visible */}
        <Routes>
          <Route 
            path="/" 
            element={
              <> 
                <MainContent /> 
                <InfoSection/> {/* InfoSection comes after MainContent */}
              </>
            } 
          />
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
