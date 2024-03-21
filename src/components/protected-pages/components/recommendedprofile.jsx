import CustomBtn from "@/clients/btn";
import "../../../scss/recommendedprofile.scss";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { alertme } from "@/util/handlers";
export default function RecommendedProfile({
  img,
  name,
  age,
  address,
  occupation,
  btnname,
}) {
  return (
    <div className="Recommended-profile-frame">
      <div>
        <Image
          src={img}
          alt="presonImg"
          width={0}
          height={0}
          quality={75}
          sizes="100vw"
        />
      </div>
      <div>
        <h4>{name}</h4>
        <label> {age},&nbsp;</label>
        <label> {address}</label>
        <p>{occupation}</p>
        <CustomBtn btnname={btnname} btnfunc={alertme} />
      </div>
      <div className="custom-closebtn">
        <CustomBtn btnname={<RxCross1 />} btnfunc={alertme} />
      </div>
    </div>
  );
}
