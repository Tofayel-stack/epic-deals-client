
import Slider from "react-slick";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';
import ProductCard from "./ProductCard";



const UsedProduct = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FaLongArrowAltRight
        className={className}
        style={{ ...style, display: "block",color:'tomato',height:'50px',position:'absolute' , top:-20,left:'52%' }}
        onClick={onClick}
        

      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FaLongArrowAltLeft
        className={className}
        style={{ ...style, display: "block" ,color:'tomato',height:'50px',position:'absolute' , top:-20,left:'48%' }}
        onClick={onClick}
      />
    );
  }


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };






    return (
          <div className="container m-auto py-16">
          
          <h2 className="max-w-lg my-12 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl "> 
                Used <span className='text-amber-600'>Product________</span>
                </h2>


<hr />
            <Slider {...settings}>
              
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
             
             
              
             
            </Slider>
<hr />
        </div>
    );
};

export default UsedProduct;