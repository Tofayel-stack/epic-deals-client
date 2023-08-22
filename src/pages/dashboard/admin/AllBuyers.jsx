
import { useQuery } from "react-query";
import BigSpinner from "../../../components/BigSpinner";

import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from "react-hot-toast";



const AllBuyers = () => {

    // this is a dynamic api in server . will work depend on query form the url ..
    const buyerURL = 'http://localhost:5000/typeOfUser?type=Buyer'

    const { data=[],isLoading,refetch}=useQuery({
        queryKey:[buyerURL],
        queryFn: async() => {
            const res = await fetch(buyerURL)
            const data = res.json()
            return data
        }    
    })
    const allBuyer = data?.data;

 
// delete a specific buyer id  form a admin dashboard.... 
const handleDeleteBuyer =(id)=>{
    const confirm = window.confirm("wanna delete ?")
    if(confirm){
        fetch(`http://localhost:5000/user?id=${id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result.success){
                toast.success('user deleted ! ')
                refetch()
            }
           
        })
    }
    
}






    if(isLoading){
        return <BigSpinner></BigSpinner>
    }

    return (
        <div>
        <h1 className="p-8 text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">All of my <span className="text-amber-500">Buyers</span></h1>
        <span className='mx-8 font-semibold text-slate-400'>Total Buyer ({allBuyer?.length}) </span>
       {/* table  */}
       <div>
           <div className="overflow-x-auto">
           <table className="table">
               {/* head */}
               <thead>
               <tr className='text-amber-600 font-semibold'>
                   
                   <th>Name</th>
                   <th>Email</th>
                   <th>Type</th>
                   <th>Action</th>
               </tr>
               </thead>

               {/* body */}
               <tbody>


               {

                allBuyer && 
                           <>
                           {
                               allBuyer?.map(buyer => 
                                   <tr key={buyer._id}>
                               
                                   <td>
                                   <div className="flex items-center space-x-3">
                                       <div className="avatar">
                                       <div className="mask mask-squircle w-12 h-12">
                                           <img src={buyer.uploadedPhotoURL} alt="productPhoto" />
                                       </div>
                                       </div>
                                       
                                       <div className="font-bold">{buyer.userName}</div>
                                       
                                   </div>
                                   </td>

                                   <td>{buyer.email}</td>

                                   <td className="text-amber-500">{buyer.userType}</td>

                                  
                                   <td>
                                       <button className='btn btn-xs text-red-500 text-xl'><AiOutlineDelete onClick={()=>handleDeleteBuyer(buyer._id)}/></button> 
                                       
                                   </td>
                               </tr>
                               )
                           }
                           </>
               }


           
               </tbody> 
           </table>
           </div>
       </div>
   </div>
    );
};

export default AllBuyers;