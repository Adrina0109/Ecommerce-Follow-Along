/* eslint-disable react/prop-types */
import axios from 'axios';
import { Link } from 'react-router-dom';

function Card({ title, Index, image, description, discountedPrice, originalPrice, rating, id, handleDelete}) 
{
  const handleAddToCart = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        `http://localhost:8080/cart/add-to-cart?token=${token}`,
        { productId: id, quantity: 1 }
      );
      console.log('Product Added To Cart Successfully...');
    } catch (er) {
      alert(er.message);
      console.log(er.message);
    }
  };
    return (
        <div className="w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-105">
        <div className="relative">
        <Link to={`/product-details/${id}`}>
          <img
            src={image}
            className="w-full h-48 object-cover"
            alt="Product Image missing"
          />
        </Link>

          <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            -20%
          </span>
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {title} - {Index + 1}
          </h3>
          <p className="text-gray-600 text-sm">
            {/* Premium wireless headphones with active noise cancellation and 30-hour battery life.
           */}
          {description}</p>
      
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
      
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-gray-900">{discountedPrice}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">
                {originalPrice}
              </span>
            </div>
            <button
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200"
            onClick={handleAddToCart}
          >

              Add to cart
            </button>
            <Link to={`/update-form/${id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200">
              Update
            </button>
          </Link>
          </div>
          <button
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200"
          onClick={() => handleDelete(id)}
        >Delete
        </button>
        </div>
      </div>
         
    );
  }
  export default Card;