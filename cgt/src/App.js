import "./App.css";
import Adminlogin from "./Components/Adminlogin";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Adminlogin />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
