import Image from "next/image";
import "../scss/WedImage.scss";

import Img1 from "../images/weddingpic.jpg";

export default function WedImage() {
  return (
    <div className="custom-WedImage">
      <Image
        src={Img1}
        width={0}
        height={0}
        quality={50}
        alt="wedding pic"
        sizes="75vw"
      />
    </div>
  );
}
