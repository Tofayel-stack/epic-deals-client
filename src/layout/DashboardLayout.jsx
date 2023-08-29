
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import useUserType from '../hooks/useUserType';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextElements';
import BigSpinner from '../components/BigSpinner';

const DashboardLayout = () => {

    const {user}=useContext(AuthContext)

    const [userType,loading] = useUserType(user?.email)

    if(loading){
        return <BigSpinner></BigSpinner>
    }

    return (
        <div>
             <Navbar></Navbar>
            <div className="drawer bg-orange-50 lg:drawer-open">
                <input id="dashSideNav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col overflow-x-auto">
                    {/* Page content here */}
                   
                    <Outlet></Outlet>



                    {/* <label htmlFor="dashSideNav" className="btn btn-primary drawer-button lg:hidden">XXX</label> */}
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashSideNav" className="drawer-overlay"></label> 
                    
                    <ul className="menu p-4 w-80 h-full bg-base-200  text-amber-600 font-semiboldP">
                    <span className='text-zinc-500 font-semibold text-xl'> {userType} Panel</span>
                    {/* Sidebar content here */}
                    
                    {
                        userType === 'Seller' && <>
                                <li><Link to='/dashboard/seller/myProduct'>My Products</Link></li>
                                <li><Link to='/dashboard/seller/myBuyers'>My Buyers</Link></li>
                                <li><Link to='/dashboard/seller/addProduct'>Add A Product</Link></li>
                        </>
                    }
                    {
                        userType === 'Admin' && <>
                                <li><Link to='/dashboard/admin/allSellers'>All seller</Link></li>
                                <li><Link to='/dashboard/admin/allBuyers'>All buyer</Link></li>
                                <li><Link to='/dashboard/admin/reportedItems'>Reported Items</Link></li>
                        </>
                    }
                    {
                        userType === 'Buyer' && <>
                                <li><Link to='/dashboard/regular/myOrder'>My Order</Link></li>
                                <li><Link to='/dashboard/regular/myCartList'>My Cart List</Link></li>
                        </>
                    }


                        <li><Link to='/dashboard/userProfile'>My Profile</Link></li>






                    </ul>
                
                </div>
            </div>
            
        </div>
    );
};

export default DashboardLayout;