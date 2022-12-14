import "./Homepage.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <div className="container">
        <h2 class="text-animate1">平常生活中有什麼事情常讓你感到厭煩</h2>
        {/* <br /> */}
        <h2 class="text-animate2">寫在這邊讓我們幫你試著幫你解決</h2>
        <Nav />
      </div>
      <Footer class="footer" />
    </div>
  );
}

export default HomePage;
