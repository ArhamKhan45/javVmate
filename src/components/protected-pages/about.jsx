import Footer from "../footer";
import Navbar from "../navbar";
import Profileinfo from "./components/profileinfo.jsx";

import RecommendedProfile from "./components/recommendedprofile";

import person from "../../images/sampperson.jpg";

import Namecard from "./components/namecard";

import "../../scss/userabout.scss";

export default function Userabout() {
  const about = [
    {
      About:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus exercitationem rem quos iure distinctio voluptatibus necessitatibus! Nemo, quibusdam blanditiis, aliquid accusantium odit cumque sunt alias, vitae ipsa exercitationem molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus exercitationem rem quos iure distinctio voluptatibus necessitatibus! Nemo, quibusdam blanditiis, aliquid accusantium odit cumque sunt alias, vitae ipsa exercitationem molestias?",
    },
  ];
  const data = [
    { Name: "Sample" },
    { Age: "24" },
    { Gender: "Male" },
    { "Marital Status": "Never Married" },
    {
      Caste: "sunni/pathan ",
    },
  ];
  const contact = [
    { Mobile: "+8997XX584894" },
    { Email: "dlbeew45@gmail.com" },
  ];

  return (
    <div>
      <Navbar />
      <div className="custom-user-about">
        {/* <h1>Pro - Userabout</h1> */}

        {/* Info Profile */}
        <div className="profile-info-frame">
          <Namecard image={person} namecard={Namecard} />

          <Profileinfo title={"About Arham Khan"} basicdata={about} />
          <Profileinfo title={"Basic Information"} basicdata={data} />
          <Profileinfo title={"Contact Details"} basicdata={contact} />
          <Profileinfo title={"Contact Details"} basicdata={contact} />
          <Profileinfo title={"Contact Details"} basicdata={contact} />
        </div>

        {/* Recommended Profile */}

        <div className="recommended-profile-section">
          <h4>Recommended Profile</h4>

          <RecommendedProfile
            img={person}
            name="Sample1"
            age="21 yrs"
            address={"Delhi"}
            occupation={"Software Developer"}
            btnname={"view"}
          />
          <RecommendedProfile
            img={person}
            name="Sample1"
            age="21 yrs"
            address={"Delhi"}
            occupation={"Software Developer"}
            btnname={"view"}
          />
          <RecommendedProfile
            img={person}
            name="Sample1"
            age="21 yrs"
            address={"Delhi"}
            occupation={"Software Developer"}
            btnname={"view"}
          />
          <RecommendedProfile
            img={person}
            name="Sample1"
            age="21 yrs"
            address={"Delhi"}
            occupation={"Software Developer"}
            btnname={"view"}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
