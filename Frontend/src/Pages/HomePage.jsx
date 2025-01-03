import { useState } from 'react';
import Card from "../components/ProductCard/Card";
function HomePage() {
  const [data, setdata] = useState(
    new Array(20).fill({ title: 'Product Title' })
  );
  console.log(data);
  return (
    <>
      <h1 className="text-center">Home Page for Follow along</h1>
      <div className="grid grid-cols-3">
        {data.map((ele, index) => {
          return (
            <div key={index} style={{ margin:'auto'}} className="flex justify-center">
            <Card title={ele.title} Index={index} />
          </div>
          );
        })}
      </div>
    </>
  );
}
export default HomePage;