import BannerSlider from "./banner/BannerSlider";
import TopBrands from "./topbrand/TopBrands";
import HotDealsOfTheDay from "./hotDeals/HotDealsOfTheDay";
import Categories from "./categories/Categories";
import FeaturedItem from "./advertiseItems/FeaturedItem";
import OurWorship from "./ourWorship/OurWorship";
import UsedProduct from "./usedProduct/UsedProduct";



const Home = () => {


    return (
        <div className="overflow-hidden">
           <BannerSlider></BannerSlider>

           <OurWorship></OurWorship>
           <FeaturedItem></FeaturedItem>
           <Categories></Categories>
           <HotDealsOfTheDay></HotDealsOfTheDay>
           <UsedProduct></UsedProduct>
           <TopBrands></TopBrands>
        </div>
    );
};

export default Home;