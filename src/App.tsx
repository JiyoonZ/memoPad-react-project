import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/memoPad/Main";
import Create from "./pages/memoPad/Create";
import Detail from "./pages/memoPad/Detail";
import Update from "./pages/memoPad/Update";
import "./reset.css";
import BookMark from "./pages/memoPad/BookMark";
import LeftNav from "./components/LeftNav";
import Home from "./pages/Home";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <LeftNav />
        <Routes>
          <Route path="/memo/create" element={<Create />} />
          <Route path="/memo/detail/:id" element={<Detail />} />
          <Route path="/memo/update/:id" element={<Update />} />
          <Route path="/memo" element={<Main />}>
            <Route path="bookmark" element={<BookMark />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}
const Wrapper = styled.div`
  width: 90%;
  height: 85vh;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /* border: black solid 1px; */
`;

export default App;
