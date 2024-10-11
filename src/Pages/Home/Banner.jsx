// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import photo1 from "./../../../bannerImages/photo1.jpg";
import photo2 from "./../../../bannerImages/photo2.jpg";
import photo3 from "./../../../bannerImages/photo3.jpg";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="min-w-[500px] min-h-[450px] rounded-lg " >
      <Slider {...settings}>
        <div>
          <img className="h-[500px]  w-full object-cover rounded-lg" src={photo2} alt="" />
        </div>
        <div>
          <img className="h-[500px] w-full object-cover  rounded-lg" src={photo3} alt="" />
        </div>
        <div>
          <img className="h-[500px] w-full object-cover  rounded-lg" src={photo1} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
