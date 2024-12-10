import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import common components
import Navbar from "./components/common/Navbar";


//Import Admin control components
import Dashboard from "./components/adminpanel/Dashboard";
import ManageUsers from "./components/adminpanel/manageusers/ManageUsers";
import ManageRole from "./components/adminpanel/manageroles/ManageRole";
import Permission from "./components/adminpanel/managepermission/Permission";

// Import 
import SignIn from "./components/authentication/SignIn";

function App() {
  return (
   
      <div style={{ width: "100%" }}>
        <Router>
          {/* Navbar */}
          <Navbar />


          {/* Authentication Routes */}



          {/* Main content container */}
          <div className="container">
            <Routes>
              {/* AdminControl Routes */}
              <Route exact path="/signin" element={<SignIn />} />
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/manageuser" element={<ManageUsers />} />
              <Route exact path="/managerole" element={<ManageRole />} />
              <Route exact path="/managepermission" element={<Permission />} />
            </Routes>
          </div>

         
        </Router>
      </div>
    
  );
}

export default App;
