import React from 'react';

const ReportedItemsAdmin = () => {

        // get all seller data from backend 

        const url = 'http://localhost:5000/typeOfUser?type=Seller'

        const { data=[],isLoading ,refetch}=useQuery({
            queryKey:[url],
            queryFn: async() => {
                const res = await fetch(url)
                const data = res.json()
                return data
            }    
        })
        const allSeller = data?.data;
    
        console.log(allSeller);
    


    return (
               <div>
             <h1 className="p-8 text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">All of my <span className="text-amber-500">Sellers</span></h1>
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

export default ReportedItemsAdmin;