import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';

const Draft = () => {

    const product = useLoaderData()
    console.log(product.data);
    const productData = product.data 

    const handlePayment = (e)=>{
        e.preventDefault()
        alert("payment system is coming soon ! ")
    }


    return (
        <div className='bg-zinc-700 grid justify-center content-center h-screen' >
            
            <div className='bg-zinc-800 p-6 mb-3 shadow-sm  shadow-orange-600 rounded text-xl text-white text-center w-full'>This is only : {productData.price} <TbCurrencyTaka className='inline text-2xl text-amber-600'/></div>
            
            <form onSubmit={handlePayment}>
               <div className='grid gap-1 grid-cols-1 bg-zinc-700'>
                    <div className='col-span-2'><input className='w-full bg-zinc-900 p-3' type="text" placeholder='CARD NUMBER'/></div>
                    <div className='col-span-1'><input className='w-full  bg-zinc-900 p-3' type="text" placeholder='CVC' /></div>
                    <div className='col-span-1'><input className='w-full  bg-zinc-900 p-3' type="text" placeholder='EXPIRATION DATE'/></div>
                    <div className='col-span-2'><input className='w-full  bg-zinc-900 p-3' type="text" placeholder='NAME OF CARD'/></div>
             
               </div>
               <div><button className='btn bg-amber-600 w-full outline-none border-none text-white mt-2'>Confirm Payment</button></div>
            </form>
        </div>
    );
};

export default Draft;