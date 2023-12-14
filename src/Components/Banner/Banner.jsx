import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-image">
          <div className="custom-container mobile-container">
            <h1 className="banner-header">
              <span>Computer Engineer</span>
            </h1>
            <p className="banner-description">
              142,765 Computer Engineers follow this
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
