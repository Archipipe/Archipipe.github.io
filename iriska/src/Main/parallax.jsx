import { useState } from "react";
import { useParallax } from "react-scroll-parallax";

function ParallaxBackground() {
  const ref = useParallax({ speed: 10 });
  const refStars = useParallax({ speed: -330 });

  const imagesArr = [
    "shaurma",
    "goose",
    "chupa",
    "chai",
    "vova",
    "skin",
    "renat",
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const retRef = () => useParallax({ speed: 10 });
  return (
    <>
      <section>
        <img ref={refStars.ref} src="stars.png" alt="" id="stars" />
        <img ref={ref.ref} src="moon.png" alt="" id="moon" />
        {imagesArr.map((el, index) => {
          const reff = retRef();
          if (index % 2 !== 0) {
            return (
              <img
                ref={reff.ref}
                src={`${el}.png`}
                alt=""
                id={el}
                style={{ right: "15px", top: `${(index + 1) * 600}px` }}
              />
            );
          }
          return (
            <img
              ref={reff.ref}
              src={`${el}.png`}
              alt=""
              id={el}
              style={{ left: "15px", top: `${(index + 1) * 600}px` }}
            />
          );
        })}
      </section>
    </>
  );
}

export default ParallaxBackground;
