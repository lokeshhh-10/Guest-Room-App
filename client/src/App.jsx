//importing BrowserRouter, Routes, Route to enabe client side routing in react app
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateListing from "./pages/Createlisting";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/create-listing' element={<CreateListing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
