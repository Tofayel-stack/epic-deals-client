import { MdOutlineDeliveryDining } from 'react-icons/md';
import { GiCash } from 'react-icons/gi';
import { MdSupportAgent } from 'react-icons/md';

const OurWorship = () => {
    return (
        <div className='container m-auto py-6 lg:py-24'>
            <div className="lg:flex justify-evenly bg-fixed bg-cover p-8 max-w-4xl m-auto text-white" style={{backgroundImage: "url('https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FkZ2V0fGVufDB8fDB8fHww&w=1000&q=80')"}}>
                <div className='flex flex-col items-center lg:mb-0 mb-12'>
                    <span className='text-6xl'><MdOutlineDeliveryDining></MdOutlineDeliveryDining></span>
                    <span className='text-xl font-semibold'>Low Cost Delivery</span>
                </div>
                <div className='flex flex-col items-center lg:mb-0 mb-12'>
                    <span className='text-6xl'><GiCash></GiCash></span>
                    <span className='text-xl font-semibold'>100% Cash Back Guarantee</span>
                </div>
                <div className='flex flex-col items-center lg:mb-0 mb-12'>
                    <span className='text-6xl'><MdSupportAgent></MdSupportAgent></span>
                    <span className='text-xl font-semibold'>Online Support 24/7</span>
                </div>
            </div>
        </div>
    );
};

export default OurWorship;