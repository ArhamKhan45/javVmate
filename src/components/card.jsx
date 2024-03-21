import Image from "next/image";
import "../scss/card.scss";
import CustomBtn from "@/clients/btn";

export default function Card({ img, imgalt, UserName, para, btnname }) {
  return (
    <div className="custom-card">
      <Image
        src={img}
        width={0}
        height={0}
        quality={50}
        alt={imgalt}
        sizes="100vw"
      />
      <div>
        <h3>{UserName}</h3>
        <p>{para}</p>
        <CustomBtn btnname={btnname} />
      </div>
    </div>
  );
}
