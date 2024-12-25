import React, { useEffect, useState } from "react";
import HomeProductCard from "./HomeProductCard";
import { getAllProduct } from "../../services/ProductServices";

function HomeProduct({ setEnquiryForm }) {
  const [productData, setProductData] = useState([]);
  // const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data } = await getAllProduct();
    setProductData(data);
    console.log(productData.length > 3 ? 3 : productData.length);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {productData
        .slice(0, productData.length > 3 ? 3 : productData.length)
        .map((item, index) => (
          <HomeProductCard
            data={item}
            key={index}
            setEnquiryForm={setEnquiryForm}
          />
        ))}
    </>
  );
}

export default HomeProduct;
