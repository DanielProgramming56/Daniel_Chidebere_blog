import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer"
function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route  path="/" element={<HomePage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
