import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import "./index.scss"
import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import MyLists from "./pages/myLists/MyLists";
import Player from "./pages/player/Player";
import AccountDetails from "./pages/accountDetails/AccountDetails";
import Profiles from "./pages/profiles/Profiles";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

export function App() {
  const { user } = useContext(AuthContext);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Welcome /> : <Navigate to="/" />} />
        <Route path="/profiles" element={user ? <Profiles /> : <Navigate to="/login" />} />
        <Route path="/myLists" element={user ? <MyLists /> : <Navigate to="/login" />} />
        <Route path="/accountDetails" element={user ? <AccountDetails /> : <Navigate to="/login" />} />
        <Route path="/player" element={user ? <Player /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App;
