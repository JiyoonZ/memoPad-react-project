import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Update from "./pages/Update";
import "./reset.css";
import React from "react";
import BookMark from "./pages/BookMark";
import LeftNav from "./components/LeftNav";
function App() {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
      <LeftNav />
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/" element={<Main />}>
          <Route path="bookmark" element={<BookMark />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
