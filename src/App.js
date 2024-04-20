import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pixa from "./components/Pixa";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter className="container border vh-100">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pixa" element={<Pixa />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
