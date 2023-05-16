import "./styles/Dashboard.css";
import { CarouselSection } from "../components/CarouselSection";
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
import dblQt from "../assets/images/double-quote.svg";
import logoAlba from "../assets/images/alba-logo.png";

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

  const porto = [
    {
      image: "https://albatech.id/Asset/Home/Blog/JagoApps.jpg",
      type: "Mobile apps",
      title: "ILIOS app (B2B E-commerce)",
      desc: "Has a unique selling point where not all companies offer applications for sales, data collection and management.",
    },
    {
      image: "https://albatech.id/Asset/Home/Blog/WebDev.jpg",
      type: "Website development",
      title: "Home and Living",
      desc: "Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living.",
    },
    {
      image: "https://albatech.id/Asset/Home/Blog/WebDev2.jpg",
      type: "Website development",
      title: "Hippo",
      desc: "Albatech help to create e-commerce and company profile for Hippo’s Website with realtime transaction and integration with Payment Gateway to accept multi payment.",
    },
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
            <div className="line"></div>
            <span>in weeks, not months</span>
          </div>
          <button className="book-btn" onClick={() => alert("clicked")}>
            Book now
          </button>
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
              <span id="porto-marker">Website Developments</span>
            </div>
          </div>
        </div>
      </div>

      {/* PORTOFOLIO */}
      <div className="porto-container">
        <div className="marker">Portofolio</div>
        <h1>The software that we build takes our clients to the next level</h1>
        <div className="cards-container">
          {porto.map((item, index) => {
            return <ProductCard key={index} type="porto" data={item} />;
          })}
        </div>
        <button className="porto-btn">Learn more</button>
      </div>

      {/* TESTIMONIALS */}
      <div className="testi-container">
        <div className="marker">Testimonials</div>
        <h1>What clients love in working with Albatech Team</h1>
        <div className="comment-container">
          <div className="foreground">
            <div className="comment-big">
              <h3>Amazing people</h3>
              <p>
                &quot;They are people who are not only following the tasks, but
                can work as a team. Together.&quot;
              </p>
              <div className="profile-card">
                <div className="profile-icon"></div>
                <div className="profile-name">
                  <span>Matthijs Piëst</span>
                  <span>COO at WieBetaaltWat</span>
                </div>
              </div>
            </div>
            <div className="comment-small">
              <h3>Amazing people</h3>
              <p>
                &quot;They are people who are not only following the tasks, but
                can work as a team. Together.&quot;
              </p>
              <div className="profile-card">
                <div className="profile-icon"></div>
                <div className="profile-name">
                  <span>Matthijs Piëst</span>
                  <span>COO at WieBetaaltWat</span>
                </div>
              </div>
            </div>
            <div className="comment-small">
              <h3>Amazing people</h3>
              <p>
                &quot;They are people who are not only following the tasks, but
                can work as a team. Together.&quot;
              </p>
              <div className="profile-card">
                <div className="profile-icon"></div>
                <div className="profile-name">
                  <span>Matthijs Piëst</span>
                  <span>COO at WieBetaaltWat</span>
                </div>
              </div>
            </div>
            <div className="comment-small">
              <h3>Amazing people</h3>
              <p>
                &quot;They are people who are not only following the tasks, but
                can work as a team. Together.&quot;
              </p>
              <div className="profile-card">
                <div className="profile-icon"></div>
                <div className="profile-name">
                  <span>Matthijs Piëst</span>
                  <span>COO at WieBetaaltWat</span>
                </div>
              </div>
            </div>
            <div className="comment-big">
              <h3>Partnership approach</h3>
              <p>
                &quot;We felt like we had a true partner throughout the process.
                They were clearly interested on our long-term success.&quot;
              </p>
              <div className="profile-card">
                <div className="profile-icon"></div>
                <div className="profile-name">
                  <span>Matthijs Piëst</span>
                  <span>COO at WieBetaaltWat</span>
                </div>
              </div>
            </div>
          </div>
          <div className="background">
            <img src={leftDots} alt="" />
            <img src={leftDots} className="grayed" alt="" />
            <img src={dblQt} className="top" alt="" />
            <img src={dblQt} className="btm" alt="" />
          </div>
        </div>
      </div>

      <CarouselSection />

      <div className="banner-btm-container">
        <div>
          <p>Is software important for your business?</p>
          <h2>Build it with Albatech</h2>
          <button className="banner-btm-btn">Consultation Now</button>
        </div>
      </div>

      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-start">
            <img src={logoAlba} alt="" />
            <p>
              Albatech acts as a corporate partner to help digitize their
              business to accelerate trends in remote work.
            </p>
            <div className="socials">
              <img src="https://cdn.simpleicons.org/facebook/gray" alt="" />
              <img src="https://cdn.simpleicons.org/instagram/gray" alt="" />
              <img src="https://cdn.simpleicons.org/linkedin/gray" alt="" />
            </div>
          </div>
          <div className="footer-center">
            <h4>Website</h4>
            <p>About</p>
            <p>Service</p>
            <p>Portofolio</p>
            <p>Blog</p>
            <p>Career</p>
          </div>
          <div className="footer-end">
            <h4>Contact</h4>
            <p>
              The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera,
              Kota Tangerang, Banten 15143
            </p>
            <p>
              <span>P:</span>+62 81 1889 3383
            </p>
            <p>
              <span>E:</span>info@albatech.id
            </p>
          </div>
        </div>
        <div className="footer-footer">
          <div className="start">
            ©PT. Alba Digital Teknologi 2021 | All Rights Reserved
          </div>
          <div className="end">Privacy policy | Terms of service</div>
        </div>
      </footer>
    </div>
  );
};
