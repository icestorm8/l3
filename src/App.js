import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pixa from "./components/Pixa";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter className="container border vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pixa" element={<Pixa />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
