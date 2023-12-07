import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer"
import SIngleBlog from "./pages/SIngleBlog";
import ProtectRoutes from "./components/ProtectRoutes";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import { selectUser } from "./store/reducers/authSlice";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector(selectUser)
  let isAdmin = user?.user?.isAdmin
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route  path="/" element={<HomePage />}/>
        <Route  path="/blog/:id" element={<SIngleBlog />}/>
          <Route  path="/login"  element={<LoginPage/>}/>
        <Route element={<ProtectRoutes   admin={isAdmin} />}>
          <Route path="/admin" element={<AdminPage/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
