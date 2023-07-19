import CategoriCard from "./CategoriCard";
import furniture from '../../../assets/categori/Furniture.png'
import clothes from '../../../assets/categori/clothes.png'
import gadgets from '../../../assets/categori/gadgets.png'

const Categories = () => {


    const categoriData = [
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
        }
    ]
    return (
        <div className=""> 
        <div className="container m-auto py-8">

           <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl "> 
            Categories<span className='text-amber-600'>_________</span>
           </h2>

        <div className="flex flex-wrap justify-center gap-12 mt-12">
     
        {
            categoriData.map((data,i) => 
               <div  key={i} onClick={()=>console.log(data.id)}>
                 <CategoriCard
               
                data={data}
                ></CategoriCard>
               </div>
            )
        }
            
          
       </div>
      </div>
     </div>
    );
};

export default Categories;