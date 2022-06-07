import React, { useEffect } from "react";
import Main from "./Main";
import Topic from "./Topic";
import Scroll from "react-scroll";

import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [startState, setStartState] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          if (startState) {
            if (scrollState) {
              console.log(
                (window.pageYOffset + window.innerHeight) /
                  window.document.body.offsetHeight
              );
              Scroll.animateScroll.scrollToBottom({
                duration:
                  45000 *
                  (1 -
                    (window.pageYOffset + window.innerHeight) /
                      window.document.body.offsetHeight),
                smooth: "linear",
              });
            }
            setScrollState(!scrollState);
          }
        }}
      >
        <Topic ScrollStart={setStartState} />
        <Main />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
