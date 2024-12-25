import React, { useEffect, useState } from "react";
import { getAllProduct } from "../services/ProductServices";
import HomeProductCard from "../components/HomeProduct/HomeProductCard";
import EnquireForm from "../components/EnquireForm";

function Product() {
  const [Products, setProducts] = useState([]);
  const [enquiryForm, setEnquiryForm] = useState(false);

  const fetchData = async () => {
    const { data } = await getAllProduct();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="background lg:p-20 py-10 px-4">
        <div className="text-4xl font-bold">Our Products</div>
        <div className="mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Products.map((p, index) => (
              <HomeProductCard
                data={p}
                key={index}
                setEnquiryForm={setEnquiryForm}
              />
            ))}
          </div>
        </div>
      </div>
      {enquiryForm && <EnquireForm onClickHandle={setEnquiryForm} />}
    </div>
  );
}

export default Product;
