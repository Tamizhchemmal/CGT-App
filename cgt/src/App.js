
import logo from "./logo.svg";
import "./App.css";
import Adminlogin from "./Components/Adminlogin";
import { Route, Routes } from "react-router-dom";
import Referralpage from "./Components/Referralpage";
import Studentpage from "./Components/Studentpage";


function App() {
  return (
    <>
      <Routes>

        <Route path="/referralpage" element={<Referralpage />}></Route>
        <Route path="/studentpage" element={<Studentpage />}></Route>
        <Route path="/" element={<Adminlogin />}></Route>

      </Routes>
    </>
  );
}

export default App;
