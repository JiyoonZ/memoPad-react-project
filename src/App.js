import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Create from "./pages/Create";
import "./reset.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
