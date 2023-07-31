import BannerSlider from "./banner/BannerSlider";
import TopBrands from "./topbrand/TopBrands";
import HotDealsOfTheDay from "./hotDeals/HotDealsOfTheDay";
import Categories from "./categories/Categories";
import FeaturedItem from "./advertiseItems/FeaturedItem";
import OurWorship from "./ourWorship/OurWorship";



const Home = () => {


    return (
        <div>
           <BannerSlider></BannerSlider>

           <OurWorship></OurWorship>
           <FeaturedItem></FeaturedItem>
           <Categories></Categories>
           <HotDealsOfTheDay></HotDealsOfTheDay>
           <TopBrands></TopBrands>
        </div>
    );
};

export default Home;