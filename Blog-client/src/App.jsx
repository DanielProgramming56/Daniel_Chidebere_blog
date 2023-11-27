import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer"
import SIngleBlog from "./pages/SIngleBlog";
import ProtectRoutes from "./components/ProtectRoutes";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route  path="/" element={<HomePage />}/>
        <Route  path="/blog/:id" element={<SIngleBlog />}/>
        <Route element={<ProtectRoutes />}>
          <Route  path="/login"  element={LoginPage}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
