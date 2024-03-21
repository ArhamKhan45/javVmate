import "../scss/footer2.scss";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
export default function Footer2(params) {
  return (
    <div className="custom-footer-2">
      <div>
        <h4>Follow Us</h4>
        <div>
          <div>
            <RiFacebookFill />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <TiSocialTwitter />
          </div>
        </div>
      </div>
      <div>
        <h4>JabVmate</h4>
        <p>
          &#169; JabBmate-2020.All Rights Reserved II Designed by
          <span> JabVmate</span>
        </p>
      </div>
    </div>
  );
}
