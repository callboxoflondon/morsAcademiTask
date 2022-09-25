import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import SectionVideos from "./pages/SectionVideos";

function App() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<SectionVideos />} />
    </Routes>
  );
}

export default App;
