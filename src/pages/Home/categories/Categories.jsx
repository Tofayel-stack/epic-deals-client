import CategoryCard from "./CategoryCard";
import furniture from '../../../assets/categori/Furniture.png'
import clothes from '../../../assets/categori/clothes.png'
import gadgets from '../../../assets/categori/gadgets.png'
import fashion from '../../../assets/categori/fashion.jpg'
import { useNavigate } from "react-router-dom";

const Categories = () => {

    const navigate = useNavigate()


    const categoryData = [
        {   id:1,
            name:"Furniture",
            photo:furniture
        },
        {
            id:2,
            name:"Clothes",
            photo:clothes
        },
        {   
            id:3,
            name:"Gadgets",
            photo:gadgets
        },
        {   
            id:4,
            name:"Fashion",
            photo:fashion
        }
    ]



    const categoryTrigger = (categori)=>{
        // console.log(categori);
        navigate(`/categoryProduct/${categori}`)

    }


    return (
        <div className=""> 
        <div className="container m-auto lg:py-8">

           <h2 data-aos="fade-left" className="max-w-lg font-sans text-xl lg:text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl "> 
            Categories<span className='text-amber-600'>_________</span>
           </h2>

        <div data-aos="fade-up"
            data-aos-duration="800"
            className="flex flex-wrap justify-center gap-12 mt-12">
     
        {
            categoryData.map((data,i) => 
               <div  key={i} onClick={()=>categoryTrigger(data.name)}>
                 <CategoryCard
                 data={data}
                ></CategoryCard>
               </div>
            )
        }
            
          
       </div>
      </div>
     </div>
    );
};

export default Categories;