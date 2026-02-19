import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PicDetail from "./pages/PicDetail";
import PicCreate from "./pages/PicCreate";
import PicEdit from "./pages/PicEdit";

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
