import "../scss/footer.scss";
import Footertwo from "./footer2";
import Footerone from "./footer1.jsx";
export default function Footer(params) {
  return (
    <div className="custom-footer">
      <div className="footer-1">
        <Footerone />
      </div>
      <div className="footer-2">
        <Footertwo />
      </div>
    </div>
  );
}
