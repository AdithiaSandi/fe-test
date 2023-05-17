import { useCookies } from "react-cookie";
import { Navbar } from "../components/Navbar.jsx";
import "./styles/ProfilePage.css";
import { useState } from "react";
import logoWeb from "../assets/images/services-web-dev.svg";
import logoMobile from "../assets/images/services-mobile-dev.svg";
import logoDesign from "../assets/images/services-digital-product-design.svg";
import { ProductCard } from "../components/ProductCard.jsx";

export const ProfilePage = () => {
  document.title = "Profile";
  const [cookies, setCookies] = useCookies();
  const [show, setShow] = useState("password");
  const [eye, setEye] = useState(
    "https://www.svgrepo.com/show/378601/eye-closed.svg"
  );

  const toggleType = () => {
    if (show == "password") {
      setShow("text");
      setEye("https://www.svgrepo.com/show/378603/eye-open.svg");
    } else {
      setShow("password");
      setEye("https://www.svgrepo.com/show/378601/eye-closed.svg");
    }
  };

  const services = [
    {
      title: "Website development",
      desc: "High-performance website to reach out more your potential customers",
      image: logoWeb,
    },
    {
      title: "Mobile apps development",
      desc: "To accelerate your business process",
      image: logoMobile,
    },
    {
      title: "Digital product design",
      desc: "Complete digital product creations from UX prototyping to final UI designs",
      image: logoDesign,
    },
  ];

  return (
    <div className="profile-container">
      <Navbar />
      <div className="detail-container">
        <div className="detail-content">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwritestylesonline.com%2Fwp-content%2Fuploads%2F2016%2F08%2FFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg&f=1&nofb=1&ipt=9645072194161536d0907a51a08cc7d4b4d6b060068f1da0bbfabe502e64d9ad&ipo=images" alt="" />
          <h3>Arueshalae</h3>
          <span>Product Manager</span>
          <div>
            <img src="https://www.svgrepo.com/show/437815/cookie.svg" alt="" />
            <input type={show} value={cookies.token} disabled />
            <img src={eye} alt="" role="button" onClick={() => toggleType()} />
          </div>
        </div>
        <div className="division-container">
          <h4>Divisions</h4>
          <div className="division-items">
            {services.map((item, index) => {
              return <ProductCard key={index} type="services" data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
