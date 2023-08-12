import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mainLogo from '../assets/mainLogo.png'
import { AuthContext } from '../context/AuthContextElements';
import useUserType from '../hooks/useUserType';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import { RiMenuUnfoldFill } from 'react-icons/ri';



const Navbar = () => {

    const {user,userSignOUt} = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()

    const handleSignOut =()=>{
      userSignOUt()
      navigate('/')
      localStorage.removeItem("products");
    }

    // custom hook
    const [userType,loading] = useUserType(user?.email)



    
    return (
  
    <div className="bg-gray-900">
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          
          {/* side nav button  */}
      
         <label title='dashboard nav' htmlFor="dashSideNav" className="text-white drawer-button lg:hidden"><RiMenuUnfoldFill></RiMenuUnfoldFill></label>


        <Link
          className="inline-flex items-center"
          to='/'
        >
          <img className='w-14' src={mainLogo} alt="mainLogo" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
            Epic-Deals
          </span>
        </Link>
     
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
               to='/'
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-amber-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/usedProduct'
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-amber-600"
              >
                Used Product
              </Link>
            </li>
            <li>
              <Link
              to='/blogs'
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-amber-600"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-amber-600"
              >
                About us
              </Link>
            </li>
            <li>
              {/* user will be redirect to dashboard according to userType  */}
              {/* if the loading is false and role detected then dashboard option will show*/}

              {
              user && userType === 'Admin' && 
                <Link
                to='/dashboard/admin/allSellers'
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-amber-600"
              >
                Dashboard
              </Link>
              }
              {
              user && userType === 'Buyer' && 
                <Link
                to='/dashboard/regular/myOrder'
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-amber-600"
              >
                Dashboard
              </Link>
              }
             
              {
              user && userType === 'Seller' && 
                <Link
                to='/dashboard/seller/myProduct'
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-amber-600"
              >
                Dashboard
              </Link>
              }
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              {
                user? 

                <button onClick={handleSignOut} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white
                transition hover:-rotate-2 hover:scale-110 outline focus:ring-amber-600 active:bg-amber-800">signOut</button>
                :

                <Link
                to='/signIn'
                className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white
                transition hover:-rotate-2 hover:scale-110 outline focus:ring-amber-600 active:bg-amber-800"
                
              >
                Sign up
              </Link>

              }
            </li>
          </ul>





          {/* dropdown function is here */}
          <div className="lg:hidden z-20">
            <button
              
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <BsFillMenuButtonWideFill className='text-white'></BsFillMenuButtonWideFill>
            </button>



{/* dropdown menu is there */}

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                    
                    <Link
                          className="inline-flex items-center"
                        >
                          <img className='w-14' src={mainLogo} alt="mainLogo" />
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Epic-Deals
                          </span>
                        </Link>
                    </div>
                    <div>
                      <button
                       
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <MdOutlineClose className='text-amber-400 text-xl'></MdOutlineClose>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to='/usedProduct'
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
                        >
                          Used Product 
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/blogs'
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/about'
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        {/* user will be redirect to dashboard according to userType  */}
                        {/* if the loading is false and role detected then dashboard option will show*/}

                        {
                        user && userType === 'Admin' && 
                          <Link
                          to='/dashboard/admin/allSellers'
                          className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-amber-600"
                        >
                          Dashboard
                        </Link>
                        }
                        {
                        user && userType === 'Buyer' && 
                          <Link
                          to='/dashboard/regular/myOrder'
                          className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-amber-600"
                        >
                          Dashboard
                        </Link>
                        }
                      
                        {
                        user && userType === 'Seller' && 
                          <Link
                          to='/dashboard/seller/myProduct'
                          className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-amber-600"
                        >
                          Dashboard
                        </Link>
                        }
                      </li>
                     
                    
                      <li>
                          {
                            user? 

                            <button onClick={handleSignOut} className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-amber-600 focus:shadow-outline focus:outline-none">signOut</button>
                            :

                            <Link
                            to='/signIn'
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-amber-600 focus:shadow-outline focus:outline-none"
                            
                          >
                            Sign up
                          </Link>

                          }
                        </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

       
    );
};

export default Navbar;