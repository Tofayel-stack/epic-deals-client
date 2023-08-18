import { useContext, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useForm } from "react-hook-form";
import loadingStiker from '../../../assets/addProduct/Loading-bro.png'
import { AuthContext } from "../../../context/AuthContextElements";
import { toast } from "react-hot-toast";
import SmallSpinner from "../../../components/SmallSpinner";

const AddProduct = () => {

    // dnd
    const fileTypes = ["JPEG","JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const handleChange = (photo) => {
    setFile(photo);
    };
    //...
    const {user}= useContext(AuthContext)
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [buttonLoading,setButtonLoading]=useState(false)

    const handleAddProduct = (data) =>{
        setButtonLoading(true)
        const {productName,productDetails,categories,productCondition,price } = data

     

            // upload the user image to imagBB to get the url for DATABASE
    
            const apiKey = 'b1668bca15c70ef4cb7797c42ee66610'
            const imgBBurl = `https://api.imgbb.com/1/upload?key=${apiKey}`
            const formData = new FormData();
            formData.append('image', file);
      
            fetch(imgBBurl , {
              method: 'POST',
              body: formData
            })
              .then(res => res.json())
              .then(result => {
    
                if(result.success){
                    const uploadedPhotoURL = result.data.url;
                    //  save data to Database (by call this function )
                    const productData = {
                        productName,
                        productDetails,
                        categories,
                        productCondition,
                        price,
                        sellerEmail: user.email,
                        productPhoto: uploadedPhotoURL
                        
                    }
                    productDataSave(productData)
    
                } 
              })
              .catch(error => {
                console.error('Error:', error)
                toast.error('something error in img upload')
              });

 }



        const productDataSave =(productData)=>{
                           
            // user Data save to database 
            
                const url = 'http://localhost:5000/addProduct';
                fetch(url,{
                    method:'post',
                    headers:{"Content-Type": "application/json"},
                    body:JSON.stringify(productData)
                    
                })
                .then(res => res.json())
                .then(result => {
                    if(result.data.acknowledged){
                            console.log(result)
                            toast.success('product added done')
                            reset()
                            setButtonLoading(false)
                    }
                })
                .catch(error=>console.error(error))
            
        }
            


        

    return (
       
          

        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Add your Product</h1>

            <p className="mt-4 text-gray-500">
            Do you want to grow your business countrywide and reach millions of customers with your products instantly in Bangladesh? Then becoming a <span className="text-amber-600">Epic-deals</span> seller is everything you need to do now.
            </p>
            </div>
{/* add product input form */}
            <form onSubmit={handleSubmit(handleAddProduct)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                      

                            <div className="relative">
                                <p className="text-amber-300 text-sm">Product Name</p>
                            <input
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                {...register("productName", { required: true })}
                                placeholder="Item Name"
                                type="text"
                            />
                            {errors.productName && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>


                            <div className="relative">
                            <p className="text-amber-300 text-sm">Product Price</p>
                            <input
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                {...register("price", { required: true , min: 1})}
                                placeholder="Price "
                                type="number"
                            />
                            {errors.price && <span className="text-red-500 text-xs">give a currect value</span>}
                            </div>

                            
                            <div className="relative">
                            <p className="text-amber-300 text-sm">Product Category</p>
                            <select
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                {...register("categories", { required: true })}
                              
                            >
                                    <option>Furniture</option>
                                    <option>Clothes</option>
                                    <option>Gadgets</option>
                                    <option>Fashion</option>
                            </select>
                            {errors.categories && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>


                            
                            <div className="relative">
                            <p className="text-amber-300 text-sm">Product Condition</p>
                            <select
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                {...register("productCondition", { required: true })}
                              
                            >
                                    <option>New</option>
                                    <option>Used</option>
                            </select>
                            {errors.productCondition && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>


                            <div className="relative">
                            <p className="text-amber-300 text-sm">Add Details</p>
                            <input
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                {...register("productDetails", { required: true })}
                                placeholder="Add some details "
                                type="text"
                            />
                            {errors.productDetails && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>

                            <div className="relative">
                                {/*drag and drop form react dnd */}
                            <FileUploader
                                    handleChange={handleChange}
                                    name="photo"
                                    types={fileTypes}
                                    required
                                />
                            <p className="text-amber-300">{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
                            </div>


                            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-amber-400">
                            {
                                  buttonLoading? <SmallSpinner></SmallSpinner> : 'Add Product'

                             
                            }
                        </button>


                      


                        </form>
                    
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
            alt="Welcome add your product"
            src={loadingStiker}
            className="absolute inset-0 h-full w-full object-cover"
            />
        </div>
        </section>
       
    );
};

export default AddProduct;