import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";


const MyCartList = () => {

 

    // get all data of (added on cart .) local storage 
    const orderItem = localStorage.getItem('products')
    const cartProduct = JSON.parse(orderItem)

    // console.log(cartProduct);

    const deleteFun = (product)=>{
        const confirm = window.confirm('Are u sure ? ')

        if(confirm){
        // Find the index of the object you want to remove 
        const indexToRemove = cartProduct.findIndex(obj =>  obj.id === product.id);

        if (indexToRemove !== -1) {
            // Use the splice() method to remove the object from the array ( 1 elements will remove from  index to Remove)
            cartProduct.splice(indexToRemove, 1); 
          
            // Convert the modified array to JSON string
            const updatedArrayString = JSON.stringify(cartProduct);
          
            // Update the localStorage with the updated JSON string
            localStorage.setItem('products', updatedArrayString);
            // reload the hole page to get the current data 
            window.location.reload();
            toast.success("removed product form cart");
          } else {
            toast.error("not found in the array.")
          }

        }
    }

  



    if(cartProduct === null){
            return <div>
                <div>   <h1 className="p-8 text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">My <span className="text-amber-500">Cart Product List</span></h1></div>
                <div className="flex items-center justify-center h-full text-4xl text-zinc-500">No Order Yet</div>
            </div>
    }
    return (
        <div>
            {/* title for my order */}
            <div>   <h1 className="p-8 text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">My <span className="text-amber-500">Order</span></h1></div>
            <span className='mx-8 font-semibold text-slate-400'>Total product ({cartProduct?.length}) </span>
            {/* table for order list  */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="bg-zinc-200 text-zinc-800 drop-shadow-lg">
                        <th>Sr No</th>
                        <th>Product Name</th>
                        <th>Product Id</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>


                    {/*row  data put here */}
                  


                    {
                        cartProduct?.map((product,i) =>  <tr key={i}>
                            <th>{i +1 }</th>
                            <td>{product.name}</td>
                            <td className="text-red-500">{product.id}</td>
                            <td>{product.price}</td>
                            <td>
                                <button 
                                className={`btn btn-xs`} 
                                >
                                    <Link to={`/dashboard/regular/paymentRoute/${product.id}`}>Pay</Link>
                                </button>

                                <button onClick={()=>deleteFun(product)}  className="btn btn-xs">delete</button>
                            </td>
    
                        </tr>)
                    }
             
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCartList;