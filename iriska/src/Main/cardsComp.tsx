import PhotoCopm from "./photoComponent";
import cardsInfoJSON from "./cardsInfo.json";

type jsonFile = {
  img: string;
  topText: string;
  bottomText: string;
};

function CardsComp() {
  return (
    <div className="Cards">
      {cardsInfoJSON.map((el: jsonFile) => (
        <PhotoCopm
          index={true}
          image={el.img}
          topText={el.topText}
          bottomText={el.bottomText}
        />
      ))}
    </div>
  );
}

export default CardsComp;
