import { useState, useEffect } from "react";
import Card from "../components/ProductCard/Card.jsx";
import axios from "axios";
import {Link} from "react-router-dom"
function HomePage() {
  const dataRedux = useSelector((state)=> state.user)
  const [data, setdata] = useState([]);
  // new Array(20).fill({ title: 'Product Title' })
  const fetchProduct = async () => {
    const response = await axios.get(
      'http://localhost:8080/product/get_product'
    );
    setdata(response.data.data);
  };
  useEffect(() => {
    console.log("clicked");

    const callHandle = async () => {
      await fetchProduct();
    };
    callHandle();
  }, []);

  console.log(data);
  const handleDelete = async (id) => {
    console.log('id', id);
    const data = await axios.delete(`http://localhost:8080/product/${id}`);
    setdata(data.data.data);
  };
  return (
    <>
      <h1 className="text-center">Home Page for Follow along</h1>
      <div className="grid grid-cols-3">
        {data?.map((ele, index) => {
          return (
            <div
              key={index}
              style={{ margin: "auto" }}
              className="flex justify-center"
            >
            <Link to={`/product-details/${ele._id}`}>
              <Card
                title={ele.title}
                image={ele.images ? ele.images : "Product image is missing"}
                Index={index}
                description={ele.description}
                originalPrice={ele.originalPrice}
                discountedPrice={ele.discountedPrice}
                rating={ele.rating}
                id={ele._id}
                handleDelete={handleDelete}
                />
                </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default HomePage;
