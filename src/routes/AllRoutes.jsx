import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import Blogs from "../pages/blogs/Blogs";
import AllSeller from "../pages/dashboard/admin/AllSeller";
import AllBuyers from "../pages/dashboard/admin/AllBuyers";
import ReportedItems from "../pages/dashboard/admin/ReportedItemsAdmin";
import MyCartList from "../pages/dashboard/regularUser/MyCartList";
import AddProduct from "../pages/dashboard/seller/AddProduct";
import MyBuyers from "../pages/dashboard/seller/MyBuyers";
import MyProduct from "../pages/dashboard/seller/MyProduct";
import SignIn from "../pages/signIn/SignIn";
import PageNotFound from "../shared/PageNotFound";
import About from "../pages/about/About";
import SignUp from "../pages/signIn/SignUp";
import UserProfile from "../pages/dashboard/UserProfile";
import CategoriesProduct from "../pages/categoriesProduct/CategoriesProduct";
import ProductDetails from "../pages/productDetails/ProductDetails";
import UsedProductPage from "../pages/usedProduct/UsedProductPage";
import Payment from "../pages/payment/Payment";
import MyOrder from "../pages/dashboard/regularUser/MyOrder";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/usedProduct',
                element:<UsedProductPage></UsedProductPage>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/categoryProduct/:category',
                loader:async({params})=>await fetch(`https://epic-deals.vercel.app/categoryProduct/${params.category}`),
                element:<CategoriesProduct></CategoriesProduct>
                
            },
            {
                path:'/product/:id',
                loader:async({params})=>await fetch(`https://epic-deals.vercel.app/product/${params.id}`),
                element: <ProductDetails></ProductDetails>
            }
               
            
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard/userProfile',
                element: <UserProfile></UserProfile>
            },

            // admin route
            {
                path:'/dashboard/admin/allSellers',
                element:<AllSeller></AllSeller>
            },
        
            {
                path:'/dashboard/admin/allBuyers',
                element:<AllBuyers></AllBuyers>
            },
        
            {
                path:'/dashboard/admin/reportedItems',
                element:<ReportedItems></ReportedItems>
            },

            // regular user route 


            {
                path:'/dashboard/regular/myCartList',
                element:<MyCartList></MyCartList>
            },
            {
                path:'/dashboard/regular/myOrder',
                element:<MyOrder></MyOrder>
            },
            {
                path:'/dashboard/regular/paymentRoute/:id',
                loader:async({params})=> await fetch(`https://epic-deals.vercel.app/product/${params.id}`),
                element:<Payment></Payment>
            },


            // sellers route 
            {
                path:'/dashboard/seller/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashboard/seller/myBuyers',
                element:<MyBuyers></MyBuyers>
            },
            {
                path:'/dashboard/seller/myProduct',
                element:<MyProduct></MyProduct>
            },

        ]
    },
    {
        path:'*',
        element:<PageNotFound></PageNotFound>
    }
])
















const AllRoutes = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default AllRoutes;