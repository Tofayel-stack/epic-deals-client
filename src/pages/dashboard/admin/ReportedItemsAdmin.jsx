import React from 'react';
import { useQuery } from 'react-query';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineRestore } from 'react-icons/md';
import { toast } from 'react-hot-toast';

const ReportedItemsAdmin = () => {

        // get all reported product data from backend (dynamic api depend on url , key and value)

        const key = 'reportedItem'
        const value = true
        const {data:reportedItems=[] , refetch}=useQuery({
          queryKey:[key,value],
          queryFn:async ()=>{
            const res = await fetch(`http://localhost:5000/product?key=${key}&value=${value}`)
            const data = res.json();
            return data;
          }
        })
  
        const reportedItemsData = reportedItems.data;

         // delete a specific reported  product form a admin dashboard.... 
            const handleDeleteProduct =(id)=>{
                const confirm = window.confirm("wanna delete ?")
                if(confirm){
                    fetch(`http://localhost:5000/product?id=${id}`,{
                        method:'DELETE',
                    })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if(result.success){
                            toast.success('product deleted ! ')
                            refetch()
                        }
                    
                    })
                }
                
            }

    return (
               <div>
             <h1 className="p-8 text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">All Reported<span className="text-amber-500" > Products</span></h1>
            {/* table  */}
            <div>
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className='text-amber-600 font-semibold'>
                        
                        <th>Name</th>
                        <th>Product Id</th>
                        <th>Condition</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    {/* body */}
                    <tbody>


                    {

                        reportedItemsData && 
                                <>
                                {
                                    reportedItemsData?.map(product => 
                                        <tr key={product._id}>
                                    
                                        <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.productPhoto} alt="productPhoto" />
                                            </div>
                                            </div>
                                            
                                            <div className="font-bold">{product.productName}</div>
                                         
                                            
                                        </div>
                                        </td>

                                        <td>{product._id}</td>

                                        <td className="text-amber-500">{product.productCondition}</td>

                                       
                                        <td>
                                            <button title="Delete" onClick={()=>handleDeleteProduct(product._id)} className='btn btn-xs text-red-500 text-xl'><AiOutlineDelete/></button> 
                                            <button title="remove report"  className='btn btn-xs text-red-500 text-xl'><MdOutlineRestore/></button> 

                                            
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

export default ReportedItemsAdmin;