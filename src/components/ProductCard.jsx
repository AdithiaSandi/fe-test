import PropTypes from "prop-types";
import "./styles/ProductCard.css";

export const ProductCard = ({ type, data }) => {
  return (
    <div className={type == "services" ? "services-card" : "portos-card"}>
      <img src={data.image} alt="" />
      <span hidden={type == "services" ? true : false}>{data.type}</span>
      <h4>
        <a href="">
          {data.title}
          <span className="r-arr" hidden={type == "services" ? false : true}>
            &nbsp;&#8594;
          </span>
        </a>
      </h4>
      <p>{data.desc}</p>
    </div>
  );
};

ProductCard.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
};
