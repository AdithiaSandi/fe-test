import "./styles/Dashboard.css";
import leftDots from "../assets/images/banner-dotted-left.png";
import btmDots from "../assets/images/banner-dotted-btm.png";
import banner from "../assets/images/banner.png";
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {
  document.title = "Dashboard";

  return (
    <div>
      <Navbar />
      <div className="banner-container">
        <div className="foreground">
          <div className="top">Build or scale up</div>
          <div className="mid">your development team</div>
          <div className="btm">
            <div className="line"></div>&nbsp;&nbsp;&nbsp;&nbsp;<span>in weeks, not months</span>
          </div>
          <button className="book-btn">Book now</button>
        </div>
        <div className="background">
          <img className="left" src={leftDots} alt="" />
          <img className="btm" src={btmDots} alt="" />
          <img className="banner" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};
