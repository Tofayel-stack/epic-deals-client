import React from 'react';
import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';

const Review = ({singleProductData}) => {


    const {data,refetch}=useQuery({
        queryKey:[singleProductData],
        queryFn:async ()=> {
            const res = await fetch(`http://localhost:5000/product-comment?id=${singleProductData._id}`)
            const data = res.json()
            return data;
        }
        
    })

    const previousReview = data?.data;

    // console.log(previousReview);







     return (
        <div className='py-20'>
          <h1 className='text-3xl'>Reviews...</h1>


            {
                // if old review . then show it here //
                previousReview?.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                >
                </ReviewCard>)
                
            }

           


                {/* submit a new review form here */}
          <ReviewForm refetch={refetch} singleProductData={singleProductData}></ReviewForm>
        </div>
    );
};

export default Review;