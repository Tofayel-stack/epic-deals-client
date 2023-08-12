

const MyOrder = () => {

    // get all data of (added on cart .) local storage 
    const orderIteam = localStorage.getItem('products')
    const cartProduct = JSON.parse(orderIteam)

    const myfun = (product)=>{
        const confirm = window.confirm('Are u sure ? ')

        if(confirm){
        // Step 3: Find the index of the object you want to remove (for example, object with id: 2) 
   
        const indexToRemove = cartProduct.findIndex(obj =>  obj.id === product.id);
        console.log(indexToRemove);

        if (indexToRemove !== -1) {
            // Step 4: Use the splice() method to remove the object from the array ( 1 elements will remve from  indxtoRemove)
            cartProduct.splice(indexToRemove, 1); 
          
            // Step 5: Convert the modified array back to a JSON string
            const updatedArrayString = JSON.stringify(cartProduct);
          
            // Update the localStorage with the updated JSON string
            localStorage.setItem('products', updatedArrayString);
            // reload the hole page to get the current data 
            window.location.reload();
            console.log("removed from the array in localStorage.");
          } else {
            console.log("not found in the array.");
          }

        }
     
    }


    if(cartProduct === null){
            return <div>
                <div>   <h1 className="p-8 text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">My <span className="text-amber-500">Order</span></h1></div>
                <div className="flex items-center justify-center h-full text-4xl text-zinc-500">No Order Yet</div>
            </div>
    }
    return (
        <div>
            {/* title for my order */}
            <div>   <h1 className="p-8 text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">My <span className="text-amber-500">Order</span></h1></div>

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
                                <button className="btn btn-xs">Pay Now</button>
                                <button onClick={()=>myfun(product)}  className="btn btn-xs">delete</button>
                            </td>
    
                        </tr>)
                    }
             
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;