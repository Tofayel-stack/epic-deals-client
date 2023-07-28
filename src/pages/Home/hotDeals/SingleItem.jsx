

const SingleItem = ({product,isLoading}) => {



    if(isLoading){
        // this is a loading a skeleton for cart
        return(
            
            <div className="flex flex-col w-1/2 gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
                <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse">
                </div>
                <div className="flex flex-col flex-1 gap-5 sm:p-2">
                    <div className="flex flex-col flex-1 gap-3">
                        <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl">
                        </div>
                        <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                        <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                        <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                        <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                    </div>
                    <div className="flex gap-3 mt-auto">
                        <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse">
                        </div>
                        <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse">
                        </div>
                        <div className="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse">
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    // this is the main compnent with the loaded data ////
    return (

        <div>
                    <div className="flex max-w-md h-44 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="w-1/3 bg-cover h-full"><img className='h-full w-full' src={product.productPhoto} alt="product pic" /> </div>

                        <div className="w-2/3 p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">{product.productName}</h1>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{product.productDetails}</p>

                            <div className="flex mt-2 item-center">
                                stars rating
                            </div>

                            <div className="flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">TK {product.price}</h1>
                                <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default SingleItem;