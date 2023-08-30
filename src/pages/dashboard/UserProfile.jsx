import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextElements';
import { useQuery } from 'react-query';

const UserProfile = () => {

    const {user}= useContext(AuthContext)
    // console.log(user);

    const { data:userProfile ,isLoading, isError}=useQuery({
        queryKey:['user'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/user?email=${user?.email}`)
            const data = res.json()
            return data
        }    
    })
//    console.log(userProfile);


   


    return (
        <div>
            <div className="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
                <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
                    <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src={userProfile?.data?.uploadedPhotoURL} alt=""/>
                    <div className="text-center mt-2 text-3xl font-medium">{user?.displayName}</div>
                    <div className="text-center mt-2 font-light text-sm">{user?.email}</div>
                    <div className="px-6 text-center mt-2 text-sm">
                    <p>
                       Created Account in : <span className='text-amber-400'>{user?.metadata?.creationTime}</span>
                    </p>
                    </div>
                    <hr className="mt-8"/>
                    <div className="flex p-4">
                    <div className="w-1/2 text-center">
                      
                        <span className="font-bold">Role: </span> <span className='text-amber-700'>{userProfile?.data?.userType}</span>
                    </div>
                    <div className="w-0 border border-gray-300">
                        
                    </div>
                    <div className="w-1/2 text-center">
                        Authenticated by <span className="font-bold text-amber-600">{user?.providerId}</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;