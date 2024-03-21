"use client";

import { useState } from "react";
import Link from "next/link";
import "../scss/registerform.scss";
import MatrimonyDropdown from "./matrimonyProfileFor";
import { registerFormHandler } from "@/util/handlers";

export default function Registerform() {
  const [profiledata, setprofiledata] = useState(1);
  const [contact, setContact] = useState();
  return (
    <div className="custom-register">
      {/* {profiledata} */}
      {/* {contact} */}
      <form action="" onSubmit={(e) => registerFormHandler(e, contact)}>
        <MatrimonyDropdown getdata={setprofiledata} />
        <div>
          <label htmlFor="email_id"> Email ID*</label>
          <br />
          <input
            type="email"
            id="email_id"
            name="email"
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <label htmlFor="contact_id"> Contact Number*</label>
          <br />
          <input
            type="number"
            name="contact"
            id="contact_id"
            placeholder="Enter Contact"
            maxLength={"10"}
            minLength={10}
            onKeyDown={(e) =>
              ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
            }
            required
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password_id"> Create Password*</label>
          <br />
          <input
            type="password"
            name="password"
            id="password_id"
            placeholder="Enter Password"
          />
        </div>

        <button type="s">REGISTER</button>
      </form>
      <p>
        Already registered? <Link href={"/login"}>Login Here</Link>
      </p>
    </div>
  );
}
