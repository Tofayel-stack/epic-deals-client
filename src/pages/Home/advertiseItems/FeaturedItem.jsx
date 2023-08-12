import pic1 from '../../../assets/productGridGallery/Screenshot_14.jpg'
import pic2 from '../../../assets/productGridGallery/Screenshot_2.jpg'
import pic3 from '../../../assets/productGridGallery/Screenshot_24.jpg'
import pic4 from '../../../assets/productGridGallery/Screenshot_6.jpg'
import pic5 from '../../../assets/productGridGallery/Screenshot_7.jpg'
import pic6 from '../../../assets/productGridGallery/Screenshot_8.jpg'
import pic7 from '../../../assets/productGridGallery/Screenshot_9.jpg'

const FeaturedItem = () => {
    return (
        <div className="container m-auto lg:py-28">
             <h2 className="max-w-lg font-sans text-xl lg:text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl "> 
             FEATURED <span className='text-amber-600'> Products _________</span>
           </h2>
            <section className="max-w-4xl m-auto py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container  grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src={pic1} alt="" className="hover:scale-110 transition duration-300 w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="hover:scale-110 transition duration-300 w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic2} />
                    <img alt="" className="hover:scale-110 transition duration-300 w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic3} />
                    <img alt="" className="hover:scale-110 transition duration-300 w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic4} />
                    <img alt="" className="hover:scale-110 transition duration-300 w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic5} />
                    <img alt="" className="hover:scale-110 transition duration-300 w-full h-full row-span-2 col-span-2 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={pic6} />
                  
                    <img src={pic7} alt="" className="hover:scale-110 transition duration-300 w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                    </div>
            </section>
        </div>
    );
};

export default FeaturedItem;