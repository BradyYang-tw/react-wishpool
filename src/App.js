import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import WishPage from "./pages/WishPage";
import HelpPage from "./pages/HelpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/wish" element={<WishPage />}></Route>
      <Route path="/help" element={<HelpPage />}></Route>
    </Routes>
  );
}

export default App;
