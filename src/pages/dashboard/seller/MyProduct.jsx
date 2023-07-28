import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../context/AuthContextElements';
import BigSpinner from '../../../components/BigSpinner';
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

const MyProduct = () => {


    const {user}= useContext(AuthContext)

    const { data=[],isLoading,refetch }=useQuery({
        queryKey:[user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/sellingProduct?email=${user?.email}`)
            const data = res.json()
            return data
        }    
    })
    const sellingProduct = data?.data;

// add to hot deals / advertise 
    const handleHotDeals = (id)=>{
        fetch(`http://localhost:5000/product/${id}`,{
            method:'put',
            headers:{"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                // console.log(result.data);
                toast.success('product added to hotdeals')
                refetch()
            }
        })
    }


    if(isLoading){
        return <BigSpinner></BigSpinner>
    }
    return (
        <div>
             <h1 className="p-8 text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"> All of my <span className="text-amber-500">Products</span></h1>
            {/* table  */}
            <div>
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="bg-zinc-200 text-amber-600 drop-shadow-lg">
                        
                        <th>Product name</th>
                        <th>Conditin</th>
                        <th>Price</th>
                        <th>Details</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    {/* body */}
                    <tbody>


                    {

                        sellingProduct && 
                                <>
                                {
                                    sellingProduct?.map(product => 
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

                                        <td>{product.productCondition}</td>

                                        <td>TK: {product.price}</td>

                                        <td>
                                        {product.productDetails}
                                        <br/>
                                        <span className="badge badge-ghost badge-sm">{product.productDetails}</span>
                                        </td>

                                        <td>
                                            <button className='btn btn-xs text-red-500'><AiOutlineDelete/></button>
                                            {
                                              !product.addOnHotDeals && <button onClick={()=>handleHotDeals(product._id)} className='btn btn-xs '>add to hot-deals</button>
                                            }
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

export default MyProduct;