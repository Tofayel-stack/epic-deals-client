import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContextElements';
import { toast } from 'react-hot-toast';

const ReviewForm = ({singleProductData,refetch}) => {

    const {user} = useContext(AuthContext)
    const createTime = new Date().toLocaleString()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = e.target;
        const review= form.review.value;
        const name = form.name.value;
        const email = form.email.value;
        const productID = singleProductData._id
    
        const reviewData = {
            name, email , review,productID,createTime
        }

        fetch(`http://localhost:5000/product-comment`,{
            method:"post",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset()
            toast.success('Review added')
            refetch()
        })
    }


    // validation . (if review input is empty .. submit button will disabled )

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    return (
        <div className='bg-zinc-50 lg:w-11/12 lg:float-right lg:p-12 p-4' >
        <form onSubmit={handleSubmit}>
            <div>
                <span className='text-xl text-slate-500'>Your Review</span> <br /> 
                <textarea onChange={handleInputChange} className='w-full border outline-none p-2 mt-2' name="review" cols="30" rows="5" placeholder='how is the product '></textarea>
            </div>
           <div className='lg:flex gap-3'>
                    <div className='w-full'>
                        <span className='text-xl text-slate-500'>Email</span> <br />
                        <input className='w-full border outline-none p-2 mt-2' type="email" name='email' defaultValue={user?.email} readOnly />
                    </div>
                    <div className='w-full'>
                        <span className='text-xl text-slate-500'>Name</span> <br />
                        <input className='w-full border outline-none p-2 mt-2' type="text" name='name' placeholder='name' defaultValue={user?.displayName} />
                    </div>
           </div>
           <button className='btn w-full mt-4' disabled={inputValue === ''}>submit</button>
        </form>
</div>

    );
};

export default ReviewForm;