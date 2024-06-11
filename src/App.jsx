import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Video from "./components/video/Video";
import Carousel from "./components/carousel/Carousel";
const App = () => {
  return <div>
    <section id="HomePage">
      <Navbar/>
      {/* <Header/> */}
      <Hero/>
    </section>
    <section id="video">
      {/* <Video/> */}
      <Carousel/>
    </section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section id="Contact">Portfolio3</section>
    <section>Contact</section>
  </div>
};

export default App;
