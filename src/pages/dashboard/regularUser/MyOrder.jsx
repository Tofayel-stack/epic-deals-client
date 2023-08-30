import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContextElements';

const MyOrder = () => {

    const {user} = useContext(AuthContext)
    const [products,setProducts] = useState()


    useEffect(()=>{
        fetch(`https://epic-deals.vercel.app/paidOrder?buyerEmail=${user.email}`)
        .then(res => res.json())
        .then(data=> {
            // console.log(data.data);
            setProducts(data.data)
        })
    },[])
    return (
        <div>
            {/* title for my order */}
            <div>   <h1 className="p-8 text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">My <span className="text-amber-500">Order</span></h1></div>
            <span className='mx-8 font-semibold text-slate-400'>Total product ({products?.length}) </span>
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
                        <th>Oder Date</th>
                        <th>Status</th>
                        
                    </tr>
                    </thead>
                    <tbody>


                    {/*row  data put here */}
                


                    {
                        products?.map((product,i) =>  <tr key={i}>
                            <th>{i +1 }</th>
                            <td>{product.purchasedProduct.productName}</td>
                            <td className="text-red-500">{product.purchasedProduct._id}</td>
                            <td>{product.purchasedProduct.price}</td>
                            <td>{product.date.slice(0,10)}</td>
                            <td className='text-green-500'>{product.status}</td>

                        </tr>)
                    }
            
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;