import "./style.css";
import CardsComp from "./cardsComp";
import ParallaxBackground from "./parallax";
import { ParallaxProvider } from "react-scroll-parallax";

function Main() {
  return (
    <>
      <div className="Main" id="Main">
        <ParallaxProvider>
          <ParallaxBackground />
          <CardsComp />
        </ParallaxProvider>
      </div>
    </>
  );
}

export default Main;
