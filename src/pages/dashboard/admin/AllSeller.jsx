
import { useQuery } from "react-query";
import BigSpinner from "../../../components/BigSpinner";

import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { MdVerifiedUser } from 'react-icons/md';
import { toast } from "react-hot-toast";


const AllSeller = () => {

    const sellerURL = 'http://localhost:5000/typeOfUser?type=Seller'

    const { data=[],isLoading ,refetch}=useQuery({
        queryKey:[sellerURL],
        queryFn: async() => {
            const res = await fetch(sellerURL)
            const data = res.json()
            return data
        }    
    })
    const allSeller = data?.data;

    console.log(allSeller);


    // verify this seller with this function
    const verifySeller = (id) =>{
        
            fetch(`http://localhost:5000/verifyUser?id=${id}`,{
                method:'PUT',
                headers: {
                    "Content-Type": "application/json"
                  },
            })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('Seller verified')
                refetch()
            })
    }


    const handleDeleteUser = (id) => {
        
        const confirm = window.confirm('Are U sure to Delete This seller?')
        
        if(confirm){
            fetch(`http://localhost:5000/user?id=${id}`,{
                method:'DELETE',
            })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('Deleted user')
            })
        }
    }






    if(isLoading){
        return <BigSpinner></BigSpinner>
    }

    return (
              <div>
             <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">All of my <span className="text-amber-500">Sellers</span></h1>
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

                            allSeller && 
                                <>
                                {
                                    allSeller?.map(seller => 
                                        <tr key={seller._id}>
                                    
                                        <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={seller.uploadedPhotoURL} alt="productPhoto" />
                                            </div>
                                            </div>
                                            
                                            <div className="font-bold" title="verifyed seller">{seller.userName}</div>
                                            {
                                                seller.verify && <MdVerifiedUser className='text-green-600'></MdVerifiedUser>
                                            }
                                            
                                        </div>
                                        </td>

                                        <td>{seller.email}</td>

                                        <td className="text-amber-500">{seller.userType}</td>

                                       
                                        <td>
                                            <button title="Delete" onClick={()=>handleDeleteUser(seller._id)} className='btn btn-xs text-red-500 text-xl'><AiOutlineDelete/></button> 

                                            {
                                                !seller.verify && <button title="verify seller" onClick={()=>verifySeller(seller._id)}  className='btn btn-xs  text-blue-500'>add to verify</button>
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

export default AllSeller;