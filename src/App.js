import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Recipes from "./pages/Recipes";
import Login from "./pages/Login";



function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login/>}/>
        
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
