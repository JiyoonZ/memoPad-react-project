import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Update from "./pages/Update";
import "./reset.css";
import React from "react";

function App() {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
