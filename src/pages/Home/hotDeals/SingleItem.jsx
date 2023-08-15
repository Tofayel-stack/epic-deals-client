import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SingleItem = ({product}) => {


    // this is the main component with the loaded data ////
    return (

        <div>
                    <div className="flex max-w-md h-44 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="w-1/3 bg-cover h-full"><img className='h-full w-full' src={product.productPhoto} alt="product pic" /> </div>

                        <div className="w-2/3 p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">{product.productName}</h1>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{product.productDetails}</p>

                            <div className="flex mt-2 item-center">
                                <BsStarFill className='text-amber-400'></BsStarFill>
                                <BsStarFill className='text-amber-400'></BsStarFill>
                                <BsStarFill className='text-amber-400'></BsStarFill>
                                <BsStarFill className='text-amber-400'></BsStarFill>

                            </div>

                            <div className="flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">TK {product.price}</h1>
                                
                                <button>
                                    <Link className="ml-auto text-white bg-amber-500 py-1 px-3 font-semibold hover:bg-slate-600" to={`/product/${product._id}`}>See More</Link>
                                </button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default SingleItem;