"use client";

import "@/scss/navbar.scss";
import CustomBtn from "@/clients/btn";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="my-nav">
      <div className="flex-item-1">
        <Link href="/">
          <h1>JabVmate</h1>
        </Link>
      </div>
      <div className="flex-item-2">
        <div>
          <Link href="/about">
            <CustomBtn btnname="About" />
          </Link>
        </div>
        <div>
          <Link href={"/register"}>
            <CustomBtn btnname="REGISTER FREE!" />
          </Link>
        </div>
        <div>
          <Link href={"/login"}>
            <CustomBtn btnname="LOGIN" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
