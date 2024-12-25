import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import HomeProduct from "../components/HomeProduct";
import EnquireForm from "../components/EnquireForm";
import ClientReviews from "../components/ClientReviews";
import { Link } from "react-router-dom";

function Home() {
  const [enquiryForm, setEnquiryForm] = useState(false);
  return (
    <>
      <div className="">
        <div className=" relative px-4 sm:px-6 lg:px-8 py-24 bg-primary text-white ">
          <div className="py-10 flex flex-col text-center items-center max-w-7xl mx-auto">
            <div className="md:mt-10 text-4xl font-bold md:text-5xl">
              High-Quality EPE Foam Rolls for Every Industry Need
            </div>
            <div className="mt-10">
              Durable, Lightweight, and Versatile Foam Solutions for Packaging,
              Insulation, and More
            </div>
            <div
              onClick={() => setEnquiryForm(true)}
              className="mt-10 bg-white text-primary py-3 px-4 rounded-md border-transparent text-base flex items-center font-semibold cursor-pointer justify-center"
            >
              Make a enquiry <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="background bg-gray-50 ">
        <div className="pt-20 text-center text-4xl font-bold md:text-5xl  items-center">
          Our Products
        </div>
        <div className="px-2.5 text-center pt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          earum cupiditate? Ab dignissimos rerum eum at fugit autem soluta,
        </div>
        <div className="py-20 container mx-auto px-4 ">
          <div className="mb-5 text-3xl font-bold flex gap-14 items-end justify-between lg:justify-start">
            <div>Top Porducts</div>
            <div className="cursor-pointer flex text-lg items-center gap-1 text-[#2f333a] ">
              <Link to={"/product"} className="hover:border-b-2 border-black">
                View All
              </Link>
              <ArrowRight className="h-4" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <HomeProduct setEnquiryForm={setEnquiryForm} />
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-br from-primary/15 via-white to-primary/15">
        <div className="pt-20 pb-2 text-center text-4xl font-bold">
          What Our Clients Say
        </div>
        <div className="px-2.5 text-center pt-5">
          Don't just take our word for it. Here's what industry leaders have to
          say about their experience working with us.
        </div>
        <div className="py-20  container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ClientReviews />
          </div>
        </div>
      </div>
      {enquiryForm && <EnquireForm onClickHandle={setEnquiryForm} />}
    </>
  );
}

export default Home;
