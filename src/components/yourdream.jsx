import "@/scss/yourdream.scss";
import Registerform from "./registerform";

export default function Yourdream() {
  return (
    <div className="your-dream">
      <div>
        <h2>
          We Make Your Dream Come True
          <p>Search Here Your Bestie!!</p>
        </h2>
      </div>
      <div>
        <Registerform />
      </div>
    </div>
  );
}
