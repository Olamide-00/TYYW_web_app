import { Routes, Route } from "react-router-dom";
import Layout from "./component/layout/layout";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Epistle from "./pages/epistle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gallery/" element={<Gallery />} />
        <Route path="epistle/" element={<Epistle />} />
      </Route>
    </Routes>
  );
}

export default App;
