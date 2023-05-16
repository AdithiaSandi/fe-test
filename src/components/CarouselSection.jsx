import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/CarouselSection.css"
import Carousel from "react-bootstrap/Carousel";

export const CarouselSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div>
          <img
            className="d-block w-100"
            src="https://albatech.id/Asset/Home/Client/Nexgen.png"
            alt="nexgen"
          />
          <img
            className="d-block w-100"
            src="https://albatech.id/Asset/Home/Client/Pempek.png"
            alt="pempek"
          />
          <img
            className="d-block w-100"
            src="https://albatech.id/Asset/Home/Client/Home%20and%20Living.png"
            alt="homeandliving"
          />
          <img
            className="d-block w-100"
            src="https://albatech.id/Asset/Home/Client/Hippo.png"
            alt="hippo"
          />
          <img
            className="d-block w-100"
            src="https://albatech.id/Asset/Home/Client/Sun%20Edu.png"
            alt="sun edu"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
          <img
            className="d-block w-100"
            src="https://albatech.id/Asset/Home/Client/Ilios.png"
            alt="ilios"
          />
          <img
            className="d-block w-100"
            src="https://albatech.id/Asset/Home/Client/Melandas.png"
            alt="melandas"
          />
          <img
            className="d-block w-100"
            src="https://albatech.id/Asset/Home/Client/Dio%20Living.png"
            alt="dio"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
