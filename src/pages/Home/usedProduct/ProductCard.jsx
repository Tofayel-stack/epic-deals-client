import { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const ProductCard = ({product}) => {

    const [like,setLike]=useState(false)
    const [infoShow,setInfoShow] = useState(false)

    const navigate = useNavigate()

    const likedProduct =(e)=>{
        setLike(true)
        toast.success('Liked')
        e.stopPropagation();
    }

    const cardRedirect = (product) => {
        navigate(`product/${product._id}`)
    }
    return (
        <div>
            <div 
            onClick={()=>cardRedirect(product)}
             onMouseEnter={()=>setInfoShow(true)}
             onMouseLeave={()=>setInfoShow(false)}
             className="bg-zinc-50 shadow-lg rounded-md mx-4 my-2">
                <h3 className='text-center py-2'>Name{product?.productName}</h3>
                <div className='relative'>
                    <span><BsFillHeartFill onClick={(e)=>likedProduct(e)} className={`${like? 'text-red-500' : 'text-amber-200'} text-xl absolute top-6 right-4`}></BsFillHeartFill></span>
                    <img className='rounded w-full h-60' src={product?.productPhoto} alt="product Pic" />

                    {/* product info . visible when hover */}
                    <div className={`absolute w-full h-1/2 bottom-0 backdrop-brightness-50 p-2 ${infoShow?'opacity-100':'opacity-0' } transition duration-700`}>
                        <p className='text-zinc-500'> product info </p>
                        <p className='text-white'>{product?.productDetails}</p>
                       

                    </div>
                    
                </div>



                <div className='text-center m-4 p-4'>
                    <span>special price </span>
                    <span className='font-semibold'>$ 3050</span> <br />
                    <span className='text-amber-400 '>
                        <AiOutlineStar className='inline'></AiOutlineStar>
                        <AiOutlineStar className='inline'></AiOutlineStar>
                        <AiOutlineStar className='inline'></AiOutlineStar>
                        <AiOutlineStar className='inline'></AiOutlineStar>
                    </span>
                </div>
               

            </div>
        </div>
    );
};

export default ProductCard;