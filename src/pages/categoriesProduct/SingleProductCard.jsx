import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleProductCard =({product}) => {
    // console.log(product);

    const previousItemofLocalStorage = localStorage.getItem('products')
    const item = JSON.parse(previousItemofLocalStorage)

   const  addtoCard =(product)=>{

 

    
    const products = [{name:product.productName, id:product._id}]
    localStorage.setItem('products',JSON.stringify(products))

    
    
   }




    return (
     
               <div className="flex flex-col shadow-xl">
                    <img alt="" className="object-cover w-full h-60" src={product.productPhoto} />
            
                <div className="flex flex-col flex-1 p-6">
                
                    <span className="text-xs tracki">Rating: 5.0 <AiOutlineStar className="inline"></AiOutlineStar></span>
                    <h3 className="flex-1 py-2 text-lg font-semibold leadi">{product.productName}</h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                        <span className="text-amber-600">Price : {product.price}</span>
                        <button className="btn btn-xs"><Link>Details</Link></button>
                        <button onClick={()=>addtoCard(product)} className='btn btn-xs'>Add to cart</button>
                    </div>
                </div>
            </div>
       
    );
};

export default SingleProductCard;