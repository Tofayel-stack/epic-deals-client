import { useLoaderData } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";



const ProductDetails = () => {
    const singleProduct = useLoaderData()
    const singleProductData = singleProduct.data;
    console.log(singleProductData);


    const [item, setItem] = useState([]);

    useEffect(() => {
      const previousItemofLocalStorage = localStorage.getItem("products");
      const previousItemofLocalStorageParsed = JSON.parse(
        previousItemofLocalStorage
      );
      setItem(previousItemofLocalStorageParsed || []);
    }, []);
  
    const addtoCart = (pro) => {
      // console.log(pro);
      const previousItemofLocalStorage = localStorage.getItem("products");
      const previousItemofLocalStorageParsed = JSON.parse(
        previousItemofLocalStorage
      );
  
      if (
        !previousItemofLocalStorageParsed ||
        !previousItemofLocalStorageParsed.find((item) => item.id === pro._id)
      ) {
        const newProducts = [...(previousItemofLocalStorageParsed || []),
          { name: pro.productName, id: pro._id , price: pro.price},
        ];
        setItem(newProducts);
        localStorage.setItem("products", JSON.stringify(newProducts));
        toast.success('product added to order list, please pay to confirm ')
      }
    };
    // to make this sm product button disabled
    const isProductInCart = item.some((item) => item.id === singleProductData._id);
  
  





    return (
        <div>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="product" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={singleProductData.productPhoto} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">Categories : {singleProductData.categories}</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{singleProductData.productName}</h1>
                    <div className="flex mb-4">
                    <span className="flex items-center text-amber-400">
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                
                    </div>
                    <p className="leading-relaxed">{singleProductData.productDetails} . Introducing the EcoGarden Pro - the ultimate all-in-one indoor gardening solution that allows you to grow your favorite herbs, vegetables, and flowers right in the comfort of your home. Whether youre a seasoned gardener or a beginner, the EcoGarden Pro is designed to make gardening easy, enjoyable, and rewarding.</p>

                        <br />
                        <br />
                        <br />
                        <br />
                    <h1 className="text-amber-400 font-semibold">Shop Owner Email : <span className="text-zinc-300">{singleProductData.sellerEmail}</span></h1>
                    <h1 className="text-amber-400">Product Condition : <span className="text-lime-500">{singleProductData.productCondition}</span></h1>
                    <h1 className="text-amber-400">Product ID : <span className="text-lime-700">{singleProductData._id}</span></h1>

                    <br />
                    <br />
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <div className="flex">
                        <span className="mr-3">Color</span>
                        <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                    <div className="flex ml-6 items-center">
                        <span className="mr-3">Size</span>
                        <div className="relative">
                        <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                            <option>SM</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                        </div>
                    </div>
                    </div>
                    <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">Price  {singleProductData.price}<TbCurrencyTaka className="inline text-amber-400"></TbCurrencyTaka></span>
                    

                    <button
                        onClick={() => addtoCart(singleProductData)}
                        className={`flex btn ml-auto text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 ${isProductInCart && "btn-disabled"}`}
                        disabled={isProductInCart}
                    >
                        {isProductInCart ? "Added done" : "Add to cart"}
                    </button>


                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>

     
            </section>
        </div>
    );
};

export default ProductDetails;