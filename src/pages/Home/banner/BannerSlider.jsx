// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import pic1 from "../../../assets/bannerPic/banner1.jpg"
import pic2 from "../../../assets/bannerPic/banner2.jpg"
import pic3 from "../../../assets/bannerPic/banner3.jpg"
import SliderCompo from "./SliderCompo";



const BannerSlider = () => {

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
      
    autoplaySpeed: 3000,
    
  };



  const sliderImgInfoData = [
    {
      photo:pic1,
      title:"Youth Offer",
      details1: "Trendy Gadgets",
      details2: "For You"
    },
    {
      photo:pic2,
      title:"Summer sell",
      details1: `Offer On Home`,
      details2: `Appliance`
    },
    {
      photo:pic3,
      title:"Cloth Offer",
      details1: "Only For Dress ",
      details2: "Fascinated Guys",
    },
  ]

  return (
    <div className="container m-auto relative">
      <Slider className="" {...settings}>
  
  
    {
        sliderImgInfoData.map((data,i) => 
        <SliderCompo
        key={i}
        data={data}
        ></SliderCompo>
        )
      }
  
    </Slider>

    
    </div>
  );
};

export default BannerSlider;