import React from 'react';
import { BsStar } from 'react-icons/bs';

const ReviewCard = ({review}) => {

    return (
        
            <div className="container bg-slate-100 flex flex-col lg:w-11/12 float-right  p-4 mb-4 mx-auto divide-y rounded-md">
             
                <div className="p-4 space-y-2 text-base dark:text-gray-400">
                    <p>{review?.review}</p>
                    
                </div>

                <div className="flex justify-between p-2">
                    <div className="flex space-x-4">
                        <div>
                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{review?.name}</h4>
                            <span className="text-xs text-gray-400">{review?.createTime}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                        <BsStar></BsStar>
                        <span className="text-xl font-bold">4.5</span>
                    </div>
                </div>
            </div>
      
    );
};

export default ReviewCard;