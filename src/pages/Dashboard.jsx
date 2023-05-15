import "./styles/Dashboard.css";
import leftDots from "../assets/images/banner-dotted-left.png";
import btmDots from "../assets/images/banner-dotted-btm.png";
import banner from "../assets/images/banner.png";
import { Navbar } from "../components/Navbar";
import { ProductCard } from "../components/ProductCard";
import logoWeb from "../assets/images/services-web-dev.svg";
import logoMobile from "../assets/images/services-mobile-dev.svg";
import logoDesign from "../assets/images/services-digital-product-design.svg";
import logoMaintenance from "../assets/images/services-maintenance.svg";
import logoCMS from "../assets/images/services-cms-dev.svg";
import logoPayment from "../assets/images/services-payment-gate.svg";

export const Dashboard = () => {
  document.title = "Dashboard";

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
    {
      title: "Maintenance",
      desc: "Make sure your digital environment keep online and updated",
      image: logoMaintenance,
    },
    {
      title: "CMS development",
      desc: "You can update your website content yourself",
      image: logoCMS,
    },
    {
      title: "Integrated payment gateway",
      desc: "Simplify the payment system with just one step",
      image: logoPayment,
    },
  ];

  const tools = [
    "amazonaws",
    "googlecloud",
    "angular",
    "css3",
    "html5",
    "javascript",
    "php",
    "python",
    "react",
    "ruby",
    "mongodb",
    "mysql",
    "postgresql",
    "microsoftsqlserver",
  ];

  return (
    <div className="dashboard-container">
      <Navbar />

      {/* BANNER */}
      <div className="banner-container">
        <div className="foreground">
          <div className="top">Build or scale up</div>
          <div className="mid">your development team</div>
          <div className="btm">
            <div className="line"></div>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>in weeks, not months</span>
          </div>
          <button className="book-btn" onClick={() => alert("clicked")}>Book now</button>
        </div>
        <div className="background">
          <img className="left" src={leftDots} alt="" />
          <img className="btm" id="service-marker" src={btmDots} alt="" />
          <img className="banner" src={banner} alt="" />
        </div>
      </div>

      {/* SERVICES */}
      <div className="services-container">
        <div className="marker">Complete Package</div>
        <h1>From product design to softwarre continuous delivery</h1>
        <div className="cards-container">
          {" "}
          {services.map((item, index) => {
            return <ProductCard key={index} type="services" data={item} />;
          })}
        </div>
        <div className="tools-container">
          {tools.map((item, index) => {
            return (
              <img
                key={index}
                src={`https://cdn.simpleicons.org/${item}/gray`}
                alt=""
                height={91}
                width={91}
              />
            );
          })}
        </div>
        <div className="highlight-container">
          <h2>
            Our Progress Comes with a Collaboration Between Creativity, Ideas,
            and Technology
          </h2>
          <div className="highlights">
            <div className="design">
              <span>1000+</span>
              <span>Designs</span>
            </div>
            <div className="product">
              <span>30+</span>
              <span>Products</span>
            </div>
            <div className="web">
              <span>58+</span>
              <span>Website Developments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
