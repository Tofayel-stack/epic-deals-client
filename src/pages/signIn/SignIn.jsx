import { AiOutlineGoogle } from 'react-icons/ai';
import { ImFacebook2 } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextElements';
import { toast } from 'react-hot-toast';
import SmallSpinner from '../../components/SmallSpinner';



const SignIn = () => {


    const {userLogin,loading,setLoading} = useContext(AuthContext)
    const { register, handleSubmit, reset,formState: { errors } } = useForm();

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = (data) => {
        const {email,password} = data

        
        userLogin(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            toast.success('successfully log In')
            setLoading(false)
            reset()
            navigate(from, { replace: true })

          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
            setLoading(false)
            reset()
            
          });


    }


    return (

<>

    <header className="bg-amber-900 pattern">
        <div className="container px-6 py-4 mx-auto">
         

            <div className="flex flex-col justify-evenly items-center py-6 lg:h-[36rem] lg:flex-row">
                <div className="lg:w-1/2 hidden lg:block">
                    <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">Epic-Deals</h2>

                    <h3 className="mt-2 text-2xl font-semibold text-gray-100">
                        welcome to <span className="text-amber-600"> Epic-world</span>
                    </h3>

                    <p className="mt-4 w-3/4 text-gray-100">Welcome to Epic Deals! If you want to be a user like  
                    <span className='text-red-500 font-bold animate-bounce inline-block'>  _Seller or Buyer </span> please go to SignUp form.</p>
                </div>


                {/*login form card  */}

                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form  onSubmit={handleSubmit(handleSignIn)} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label className="block text-gray-400">Username</label>
                            <input type="text" {...register('email',{required:'required'})}  placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                            {errors?.email && <p className="text-red-600">{errors.email?.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block text-gray-400">Password</label>
                            <input type="password" {...register('password',{ required:'required', })}  placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                            {errors?.password && <p className="text-red-600">{errors.password?.message}</p>}
                            <div className="flex justify-end text-xs text-gray-400">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-amber-400">
                            {
                                 loading? <SmallSpinner></SmallSpinner> : 'SignIn'
                            }
                        </button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button aria-label="Log in with Google" className="p-3 rounded-sm">
                            <AiOutlineGoogle className='text-2xl'></AiOutlineGoogle>
                        </button>
                        <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                            <ImFacebook2 className='text-xl'></ImFacebook2>
                        </button>
                        <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                            <BsGithub className='text-xl'></BsGithub>
                        </button>
                    </div>
                    <p className="text-sm text-center sm:px-6 text-gray-400">Dont have an account? 
                        <Link to='/signUp' className="underline text-white text-bold">
                           Sign Up
                        </Link>
                    </p>
                </div>




                
            </div>
        </div>
    </header>

</>
    );
};

export default SignIn;