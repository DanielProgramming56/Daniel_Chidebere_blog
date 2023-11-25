import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/Header";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route  path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
