import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PicDetail from "./pages/PicDetail/PicDetail";
import PicCreate from "./pages/PicCreate/PicCreate";
import PicEdit from "./pages/PicEdit/PicEdit";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/pics/:id" element={<PicDetail />} />
        <Route path="/create" element={<PicCreate />} />
        <Route path="/pics/edit/:id" element={<PicEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
