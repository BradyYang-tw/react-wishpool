import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import WishPage from "./pages/WishPage";
import HelpPage from "./pages/HelpPage";
import Introduction from "./pages/Introduction";
import VoteWish from "./pages/VoteWIsh";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/react-wishpool/" element={<HomePage />}></Route>
      <Route path="/react-wishpool/wish" element={<WishPage />}></Route>
      <Route path="/react-wishpool/help" element={<HelpPage />}></Route>
      <Route
        path="/react-wishpool/introduction"
        element={<Introduction />}
      ></Route>
      <Route path="/react-wishpool/votewish" element={<VoteWish />}></Route>
    </Routes>
  );
}

export default App;
