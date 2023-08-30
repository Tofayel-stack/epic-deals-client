import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const ReportProduct = ({singleProductData}) => {
    // console.log(singleProductData);
    const [clicked, setClicked] = useState(false)


    // add to report items for any bad reason 
    const handleReportItem = (id)=>{
        const updateInfo = { reportedItem : true };

        fetch(`https://epic-deals.vercel.app/product/${id}`,{
            method:'put',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(updateInfo)
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                toast('you report this item !',
                            {
                                icon: '🤕',
                                style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                                },
                            })

                setClicked(true)
               
            }
        })
    }



    return (
        <div>
               <button
                        onClick={()=>handleReportItem(singleProductData._id)}
                        className={` btn text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 ${clicked && "btn-disabled"}`}
                        disabled={clicked}
                    >
                        {clicked ? "Reported" : "Report Item"}
                </button>
        </div>
    );
};

export default ReportProduct;