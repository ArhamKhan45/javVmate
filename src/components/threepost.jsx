import "../scss/threepost.scss";
import Card from "./card";
import img1 from "../images/wed1.jpg";
export default function Threepost() {
  return (
    <div className="custom-threepost">
      <h4>BE INSPIRED BY REAL WEDDINGS </h4>
      <p>
        Find inspiration for your Special Day. Yours could be the next Success
        Story.
      </p>
      <div className="three-cards">
        <Card
          img={img1}
          imgalt={"faiz and oppo"}
          UserName={"Faiz And Oppo"}
          para={`Some quick example text to build on the
card title and make up the bulk of the
card's content.`}
          btnname={"READ MORE"}
        />
        <Card
          img={img1}
          imgalt={"faiz and oppo"}
          UserName={"Faiz And Oppo"}
          para={`Some quick example text to build on the
card title and make up the bulk of the
card's content.`}
          btnname={"READ MORE"}
        />
        <Card
          img={img1}
          imgalt={"faiz and oppo"}
          UserName={"Faiz And Oppo"}
          para={`Some quick example text to build on the
card title and make up the bulk of the
card's content.`}
          btnname={"READ MORE"}
        />
      </div>
    </div>
  );
}
