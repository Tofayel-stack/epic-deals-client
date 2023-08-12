
import brand1 from '../../../assets/colaborate/budweiser-logo.png'
import brand2 from '../../../assets/colaborate/DELL.png'
import brand4 from '../../../assets/colaborate/oracle-logo.png'
import brand5 from '../../../assets/colaborate/verizon-logo.png'
import brand6 from '../../../assets/colaborate/visa-logo.png'
import brand7 from '../../../assets/colaborate/walmart-logo.png'

const TopBrands = () => {

    const brandLogo = [
        {photo:brand1},
        {photo:brand2},
        {photo:brand4},
        {photo:brand5},
        {photo:brand6},
        {photo:brand7},
    ]
    return (
        
            <section className="text-gray-800 py-36">
	<div className="container p-6 mx-auto space-y-6 lg:p-8 lg:space-y-8">
		<h2 className="lg:text-3xl text-xl font-bold">Top Brands <span className='text-amber-600'>___________</span></h2>
		<div className="flex flex-wrap justify-center lg:justify-between">
			
            {
                brandLogo.map((logoPic,i) => 
                    <div 
                    key={i}
                    className='w-24 h-24 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400'
                    >
                        <img className='w-full' src={logoPic.photo} alt="brandLogo" />
                    </div>
                    )
            }
			
		</div>
	</div>
</section>
       
    );
};

export default TopBrands;