import aboutPic from "../../assets/aboutPic.jpg"
import aboutPic2 from "../../assets/about2.jpg"
import aboutPic3 from "../../assets/about3.jpg"

const About = () => {
    return (
        <div className='py-20'>

            <div className="pb-20">
                {/* title */}

                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    
                    <h2 data-aos="fade-down" data-aos-duration="400" className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    About <span className='text-amber-600'> Us</span> 
                    </h2>
                   
                </div>




                <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                    <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
                        <div data-aos="fade-up-left" className="md:5/12 lg:w-1/2">
                            <img
                                src={aboutPic}
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                            />
                        </div>
                        <div data-aos="fade-down-right" className="md:7/12 lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark">
                               We have been a leader in top quality service at exceptionally low prices <span className="text-amber-600">since 2018</span>
                            </h2>
                            <p className="my-8 text-gray-600 dark:text-gray-300">
                            Welcome to Epic Deals! We are an innovative and customer-centric ecommerce platform that aims to revolutionize your online shopping experience. 
                            E-commerce has experienced tremendous growth worldwide. With the widespread availability of the internet and the proliferation of mobile devices, more people have access to online shopping. The COVID-19 pandemic further accelerated the growth of e-commerce as physical stores faced temporary closures and people turned to online shopping for their needs.
                            </p>
                            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                                <div className="mt-8 flex gap-4 md:items-center">
                                    <div className="w-12 h-12 flex gap-4 rounded-full bg-orange-100 dark:bg-orange-900/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-orange-500 dark:text-orange-400">
                                            <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="w-5/6">
                                        <h4 className="font-semibold text-lg text-gray-700 dark:text-orange-300">Automated Notifications</h4>
                                        <p className="text-gray-500 dark:text-gray-400">Automated notifications and updates regarding shipment status</p>
                                    </div>
                                </div>
                                <div className="pt-4 flex gap-4 md:items-center">
                                    <div className="w-12 h-12 flex gap-4 rounded-full bg-amber-100 dark:bg-teal-900/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="w-5/6">
                                        <h4 className="font-semibold text-lg text-gray-700 dark:text-amber-600">	United States,Texas</h4>
                                        <p className="text-gray-500 dark:text-gray-400">4700 W Park Blvd,Postal Code	75093</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section data-aos="fade-up"
                    data-aos-duration="700" 
                    data-aos-delay="50"
                    className="md:bg-gray-50 rounded-[4rem] text-gray-700 py-12 lg:mx-16 px-4">
                <div tabIndex={0} aria-label="group of cards" className="focus:outline-none px-4 lg:px-0">
                    <div className="mx-auto container flex flex-wrap px-2 lg:px-24">
                        <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-r-2 md:border-r-2 sm:border-r-0 border-orange-400 pb-10 lg:pt-10">
                            <div className="h-96 ">
                                <img className="object-fill h-full w-full" src={aboutPic2} alt="aboutpic2" />
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10">
                           {/* meta */}
                            <div className="md:w-9/12 lg:w-9/12 lg:ms-12">
                                <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-5">Extensive Product Selection: </h2>
                                <p tabIndex={0} className="focus:outline-none text-base leading-normal xl:w-10/12 pt-2"> Our ecommerce site offers an extensive catalog of products across various categories, ensuring that you can find everything you need in one place. From electronics and fashion to home decor and health essentials, we have it all. Discover the latest trends or explore unique items from established and emerging brands.</p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t-2 md:border-t-2 sm:border-t-0 lg:border-r-2 md:border-r-2 sm:border-r-0 border-orange-400 pt-10 lg:pb-20">
                           
                            <div className="md:w-9/12 lg:w-9/12 ">
                                <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-5">Fast and Reliable Delivery:</h2>
                                <p tabIndex={0} className="focus:outline-none text-base leading-normal xl:w-10/12 pt-2"> We understand the importance of timely deliveries, and our dedicated logistics team works tirelessly to ensure your orders are dispatched quickly and reach you on time. We have partnered with reputable shipping providers to offer fast and reliable delivery options, including express shipping for urgent needs. Track your package in real-time and stay updated on its progress.</p>
                            </div>
                        </div>
                        
                        <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t-2 md:border-t-2 sm:border-t-0 border-orange-400 pt-10 lg:pb-20">
                            <div className="h-96 ">
                            <img className="object-fill h-full w-full ms-12" src={aboutPic3} alt="about3" />
                            </div>
                            
                        </div>
                       
                      
                    </div>
                </div>
            </section>


        </div>
    )
}

export default About