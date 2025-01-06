// eslint-disable-next-line react/prop-types
function Card({ title, Index, image, description, discountedPrice, originalPrice, rating}) 
{
    return (
        <div className="w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-105">
        <div className="relative">
          <img
            src={image}
            alt="Product"
            className="w-full h-56 object-cover rounded-t-xl"
          />
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105">
              Add to cart
            </button>
          </div>
        </div>
      </div>
         
    );
  }
  export default Card;