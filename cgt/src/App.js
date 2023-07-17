import logo from "./logo.svg";
import "./App.css";
import Adminlogin from "./Components/Adminlogin";
import { Route, Routes } from "react-router-dom";
import Referralpage from "./Components/Referralpage";
import Studentpage from "./Components/Studentpage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/referralpage" element={<Referralpage />}></Route>
        <Route path="/studentpage" element={<Studentpage />}></Route>
        <Route path="/" element={<Adminlogin />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
