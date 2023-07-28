import { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleProductCard = ({ product }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const previousItemofLocalStorage = localStorage.getItem("products");
    const previousItemofLocalStorageParsed = JSON.parse(
      previousItemofLocalStorage
    );
    setItem(previousItemofLocalStorageParsed || []);
  }, []);

  const addtoCart = (pro) => {
    const previousItemofLocalStorage = localStorage.getItem("products");
    const previousItemofLocalStorageParsed = JSON.parse(
      previousItemofLocalStorage
    );

    if (
      !previousItemofLocalStorageParsed ||
      !previousItemofLocalStorageParsed.find((item) => item.id === pro._id)
    ) {
      const newProducts = [
        ...(previousItemofLocalStorageParsed || []),
        { name: pro.productName, id: pro._id },
      ];
      setItem(newProducts);
      localStorage.setItem("products", JSON.stringify(newProducts));
    }
  };
  const isProductInCart = item.some((item) => item.id === product._id);


  
  return (
    <div className="flex flex-col shadow-xl">
      <img
        alt=""
        className="object-cover w-full h-60"
        src={product.productPhoto}
      />

      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs tracking">
          Rating: 5.0 <AiOutlineStar className="inline" />
        </span>
        <h3 className="flex-1 py-2 text-lg font-semibold leading">
          {product.productName}
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
          <span className="text-amber-600">Price: {product.price}</span>
          <button className="btn btn-xs">
            <Link to={`/product/${product._id}`}>Details</Link>
          </button>
          <button
            onClick={() => addtoCart(product)}
            className={`btn btn-xs ${isProductInCart ? "btn-disabled" : ""}`}
            disabled={isProductInCart}
          >
            {isProductInCart ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
