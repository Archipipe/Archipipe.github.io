import "./style.css";
import { useEffect, useRef } from "react";
import Scroll from "react-scroll";
import { Howl } from "howler";

function Topic(state: { ScrollStart: Function }) {
  let music = useRef(
    new Howl({ src: ["./song.mp3"], loop: false, volume: 0.5 })
  );
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const iraClickHandler = () => {
    Scroll.animateScroll.scrollToBottom({
      duration: 45000,
      smooth: "linear",
    });
    state.ScrollStart(true);

    if (!music.current.playing()) {
      music.current.play();
      music.current.fade(0.0, 0.3, 80000);
    }
  };

  return (
    <>
      <div className="main">
        <div className="dark">
          <div className="wrapper">
            <div className="static-txt">I'm in love with</div>
            <div className="dynamic-txts">
              <span
                onClick={() => {
                  iraClickHandler();
                }}
              >
                Ira
              </span>
              ❤️
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topic;
