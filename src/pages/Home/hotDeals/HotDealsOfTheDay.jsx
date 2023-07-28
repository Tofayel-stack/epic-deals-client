
import SingleItem from "./SingleItem";
import Slider from "react-slick";
import { useQuery } from "react-query";


const HotDealsOfTheDay = () => {
  
      const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 5000,
        cssEase: "linear"
      };


   

      const {data:hotDealsProduct=[],isLoading}=useQuery({
         queryKey:[],
         queryFn: async ()=> {
            const res = await fetch(`http://localhost:5000/hotDealsProduct`)
            const data = res.json()
            return data;
         }
      })

      const productData = hotDealsProduct.data;

  
    return (
          <div className=" bg-zinc-200"> 
             <div className="container m-auto py-16">

                <h2 className="max-w-lg my-12 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl "> 
                Hot <span className='text-amber-600'>Deals</span> For Today
                </h2>

             <div className="">
               
                <Slider {...settings}>
                 
                 {
                  productData?.map(product => <SingleItem
                  key={product._id}
                  isLoadin={isLoading}
                  product={product}
                  ></SingleItem>
                  )
                 } 
           
                
               </Slider>
             
            </div>
           </div>
          </div>
    );
};

export default HotDealsOfTheDay;