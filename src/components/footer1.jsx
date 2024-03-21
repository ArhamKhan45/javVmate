import Link from "next/link";
import "../scss/footer1.scss";
import { FaPhone } from "react-icons/fa";

import { AiOutlineWhatsApp } from "react-icons/ai";
export default function Footerone() {
  return (
    <div className="custom-footer-1">
      <div>
        <h4>ABOUT US</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus dolorum, impedit suscipit nisi incidunt voluptatibus
          laboriosam porro maxime, quidem tempora atque voluptas sapiente ad
          reiciendis sed error quisquam aspernatur. Voluptas. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Necessitatibus dolorum,
          impedit suscipit nisi incidunt voluptatibus laboriosam porro maxime,
          quidem tempora atque voluptas quisquam aspernatur. Voluptas. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
          dolorum. Voluptas.
        </p>
      </div>
      <div>
        <h4>QUICK LINKS</h4>
        <hr />
        <ul>
          <li>
            <Link href={""}>Register</Link>
          </li>
          <li>
            <Link href={""}>Login</Link>
          </li>
          <li>
            <Link href={""}>Membership</Link>
          </li>
          <li>
            <Link href={""}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>SERVICES</h4>
        <hr />
        <ul>
          <li>
            <Link href={""}>Register</Link>
          </li>
          <li>
            <Link href={""}>Login</Link>
          </li>
          <li>
            <Link href={""}>Membership</Link>
          </li>
          <li>
            <Link href={""}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>CONTACT INFO</h4>
        <hr />
        <div>
          <div>
            <label>
              <span>
                <FaPhone />
              </span>
              +91-8851050712
            </label>
          </div>
          <div>
            <label>
              <span>
                <AiOutlineWhatsApp />
              </span>
              +91-8851050712
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
