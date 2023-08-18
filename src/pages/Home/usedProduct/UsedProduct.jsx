
import Slider from "react-slick";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';
import ProductCard from "./ProductCard";
import { useQuery } from "react-query";



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
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


      const condition = 'Used'
      const {data=[] , refetch}=useQuery({
        queryKey:["condition"],
        queryFn:async ()=>{
          const res = await fetch(`http://localhost:5000/product?condition=${condition}`)
          const data = res.json();
          return data;
        }
      })

      const usedProductData = data.data;

    return (
          <div className="container m-auto py-16">
          
          <h2 className="max-w-lg my-12 font-sans text-xl lg:text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl "> 
                Used <span className='text-amber-600'>Product________</span>
                </h2>


<hr />
            <Slider {...settings}>
              
            {
              usedProductData?.map(product => <ProductCard
                key={product._id}
                product={product}
              ></ProductCard>
              )
            }
             
             
              
             
            </Slider>
<hr />

        </div>
    );
};

export default UsedProduct;