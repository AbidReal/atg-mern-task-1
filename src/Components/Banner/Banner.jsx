import "./Banner.css";
import Button from "react-bootstrap/Button";

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-image">
          <div className="custom-container mobile-container">
            <div className=" d-lg-none mobile-options d-flex justify-space-between ">
              <img src="../../../public/arrow_back_24px.svg" alt="" />
              <Button variant="outline-light">Join Group</Button>
            </div>
            <h1 className="banner-header">
              <span>Computer Engineer</span>
            </h1>
            <p className="banner-description">
              142,765 Computer Engineers follow this
            </p>
          </div>
        </div>
        {/* edit circle*/}
        <div className="edit-circle d-flex align-items-center mx-auto justify-content-center">
          <img src="../../../public/edit_24px.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
