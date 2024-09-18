import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layouts/Navbar";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
          <Route path="/" element={<Home/>}/>
          </Route>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
