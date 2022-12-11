import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <h2>平常生活中有什麼事情常讓你感到厭煩</h2>
      <br />
      <h2>寫在這邊讓我們幫你試著幫你解決</h2>
      <Nav />
    </div>
  );
}

export default App;
