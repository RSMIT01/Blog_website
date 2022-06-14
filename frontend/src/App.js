import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Create from "./pages/Create/Create";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Regiser from "./pages/Register/Register"
import Single from "./pages/Single-blog/Single";
import {AuthContext} from "../src/context/AuthContext"

import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import { useContext } from "react";





function App() {
 
  const {user}= useContext(AuthContext)

  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={user ? <Create />:< Regiser/>} />
        <Route exact path="/profile" element={user ?<Profile />:<Regiser />} />
        <Route exact path="/login" element={user ? <Home />:<Login />} />
        <Route exact path="/register" element={user ? <Home />:<Regiser />} />
        <Route exact path="/post/:id" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
