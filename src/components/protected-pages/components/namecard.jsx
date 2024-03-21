import Image from "next/image";
import "../../../scss/namecard.scss";
import CustomBtn from "@/clients/btn";
import { alertme } from "@/util/handlers";
export default function Namecard({ image, namecard }) {
  return (
    <div className="custom-namecard">
      <div>
        <Image
          src={image}
          width={0}
          height={0}
          quality={50}
          alt="wedding pic"
          sizes="75vw"
        />
      </div>
      <div>
        <div>
          <p> Arham Khan</p>
        </div>
        <div>
          <p>24 years</p>
          <p>Never Married</p>
          <p>Sunni / Sheikh or Shaikh</p>
          <p>B.Tech / B.E</p>
          <p>Delhi,India</p>
        </div>
        <div>
          <CustomBtn btnname="Edit My Profile" btnfunc={alertme} />
          <CustomBtn btnname="Message" btnfunc={alertme} />
          <CustomBtn btnname="Upgrade" btnfunc={alertme} />
        </div>
      </div>
    </div>
  );
}

// const Namecard = [
//     {
//       Name: "Arham Khan",
//     },
//     {
//       Age: 22,
//     },
//     { "Marital Status": "Never Married" },
//     {
//       Caste: "sunni/pathan or General",
//     },
//     { "Highest Education": "B.Tech/B.E" },
//     { "Present Address": "New Delhi,India" },
//   ];
