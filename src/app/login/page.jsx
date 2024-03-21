"use client";
import CustomBtn from "@/clients/btn";
import "../../scss/login.scss";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Login(params) {
  return (
    <>
      <Navbar />
      <div className="custom-login">
        <div className="login-container">
          <h2>Login</h2>
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div>
                <input type="password" id="password" name="password" required />
              </div>
            </div>
            <div className="form-group">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="register-container">
            <p>
              Forget your password?{" "}
              <Link href={"/"}>
                <strong>Click Here</strong>
              </Link>
            </p>
            <Link href={"/register"}>
              <CustomBtn btnname="Create account" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
