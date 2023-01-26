import "./App.css";
import "./css/bootstrap.css";

import HomePage from "./components/Navbar";
import Slides from "./components/Landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Form from "./components/Form";

function App() {
  return (
    <div className="App ">
      <HomePage position="fixed" />
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Slides />} ></Route>
          <Route path="main"  element={<Main />} ></Route>
          <Route path="form"  element={<Form />} ></Route>
       </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
