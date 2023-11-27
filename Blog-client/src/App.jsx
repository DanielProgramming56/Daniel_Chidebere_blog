import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer"
import SIngleBlog from "./components/SIngleBlog";
function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route  path="/" element={<HomePage />}/>
        <Route  path="/blog/:id" element={<SIngleBlog />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
