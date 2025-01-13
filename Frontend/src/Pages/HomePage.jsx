import { useState, useEffect } from "react";
import Card from "../components/ProductCard/Card";
import axios from "axios";
function HomePage() {
  const [data, setdata] = useState();
  // new Array(20).fill({ title: 'Product Title' })
  const fetchProduct = async () => {
    const response = await axios.get(
      "http://localhost:8080/product/get_product"
    );
    setdata(response.data.data);
    console.log(response);
  };
  useEffect(() => {
    console.log("clicked");

    const callHandle = async () => {
      await fetchProduct();
    };
    callHandle();
  }, []);

  console.log(data);

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
              <Card
                title={ele.title}
                image={ele.images[0] ? ele.images[0] : "Product image is missing"}
                Index={index}
                description={ele.description}
                originalPrice={ele.originalPrice}
                discountedPrice={ele.discountedPrice}
                rating={ele.rating}
                id={ele._id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default HomePage;
