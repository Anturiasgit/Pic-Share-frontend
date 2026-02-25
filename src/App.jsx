import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PicDetail from "./pages/PicDetail/PicDetail";
import PicCreate from "./pages/PicCreate/PicCreate";
import PicEdit from "./pages/PicEdit/PicEdit";
import Layout from "./components/Layout/Layout";
import Connexion from "./pages/Connexion/Connexion";
import Inscription from "./pages/Inscription/Inscription";
import MyPics from "./pages/MyPics/MyPics";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/create" element={<PicCreate />} />
        <Route path="/pics/edit/:id" element={<PicEdit />} />
        <Route path="/pics/:id" element={<PicDetail />} />
        <Route path="/mypics" element={<MyPics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
