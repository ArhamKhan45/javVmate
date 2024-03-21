import Navbar from "@/components/navbar";
import Registerform from "../../components/registerform";
import "../../scss/register.scss";
function Register() {
  return (
    <>
      <Navbar />
      <div className="custom-register-section">
        <section>
          <Registerform />
        </section>
      </div>
    </>
  );
}
export default Register;
