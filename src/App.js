import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Media from "./pages/media/Media";
import Experts from "./pages/experts/Experts"
import Navbar from "./components/Navbar";
import NotFound from "./pages/not-found/NotFound";
import Plans from "./pages/plans/Plans";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="media" element={<Media />} />
        <Route path="experts" element={<Experts />} />
        <Route path="plans" element={<Plans />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
