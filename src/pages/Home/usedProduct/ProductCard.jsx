import { useState } from 'react';
import { GiSelfLove } from 'react-icons/gi';
import { AiOutlineStar } from 'react-icons/ai';
const ProductCard = () => {

    const [like,setLike]=useState(false)
    const [infoShow,setInfoShow] = useState(false)

    return (
        <div>
            <div 
             onMouseEnter={()=>setInfoShow(true)}
             onMouseLeave={()=>setInfoShow(false)}
             className="bg-zinc-50 shadow-lg rounded-md mx-4 my-2">
                <h3 className='text-center py-2'>product name</h3>
                <div className='relative'>
                    <span><GiSelfLove onClick={()=>setLike(true)} className={`${like? 'text-red-500' : 'text-amber-400'} text-xl absolute top-6 right-4`}></GiSelfLove></span>
                    <img className='rounded' src="https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?cs=srgb&dl=pexels-pixabay-279906.jpg&fm=jpg" alt="product Pic" />

                    {/* product info . visible when hover */}
                    <div className={`absolute bottom-0 backdrop-brightness-50 p-2 ${infoShow?'opacity-100':'opacity-0' } transition duration-700`}>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad amet ea deserunt.</p>
                        <span className='ml-auto text-white bg-amber-500 rounded px-2 font-semibold hover:bg-slate-600'>Buy now</span>

                    </div>
                    
                </div>



                <div className='text-center m-4 p-4'>
                    <span className='font-semibold'>$ 3050</span> <br />
                    <span className='text-amber-400 '>
                        <AiOutlineStar className='inline'></AiOutlineStar>
                        <AiOutlineStar className='inline'></AiOutlineStar>
                        <AiOutlineStar className='inline'></AiOutlineStar>
                        <AiOutlineStar className='inline'></AiOutlineStar>
                    </span>
                </div>
                {/* Open the modal using ID.showModal() method */}


                {/* modal end */}

            </div>
        </div>
    );
};

export default ProductCard;