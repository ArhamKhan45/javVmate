import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Yourdream from "@/components/yourdream.jsx";
import Nowitis from "@/components/nowitis.jsx";
import Membershippackage from "@/components/membershippackage";
import WeddingImg from "@/components/wedding";
import Threepost from "@/components/threepost.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Yourdream />
      <WeddingImg />
      <Membershippackage />
      <Threepost />
      <Nowitis />
      <Footer />
    </div>
  );
};
export default Home;
