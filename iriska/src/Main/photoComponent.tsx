import { useParallax } from "react-scroll-parallax";
type props = {
  index: boolean;
  image: string;
  topText: string;
  bottomText: string;
};

function PhotoCopm(props: props) {
  // const reff = useParallax({ speed: -5 });
  return (
    <>
      <div className="PhComp">
        {props.index ? (
          <>
            <img src={props.image} alt="" />
            <div className="text">
              <div className="top">{props.topText}</div>
              <div className="down">{props.bottomText}</div>
            </div>
          </>
        ) : (
          <>
            <div className="text">
              <div className="top">А помнишь?</div>
              <div className="down">
                Как ты попыталась меня поцеловать на месте, где потом кто-то
                разбил бутылку пива? Я думаю, это был знак.
              </div>
            </div>
            <img
              src="https://static.wixstatic.com/media/72c0b2_81b1e41f3ee8402eb807499702be9452~mv2.jpg/v1/fill/w_1000,h_571,al_c,q_90,usm_0.66_1.00_0.01/72c0b2_81b1e41f3ee8402eb807499702be9452~mv2.jpg"
              alt=""
            />
          </>
        )}
      </div>
    </>
  );
}

export default PhotoCopm;
