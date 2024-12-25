import { Info } from "lucide-react";
import React from "react";

function HomeProductCard({ data, setEnquiryForm }) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col group hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-[350px] w-full overflow-hidden">
          <img
            src={data.image}
            alt={data.name}
            className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            style={{
              aspectRatio: "3/4",
              objectFit: "cover",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {data.name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{data.description}</p>

          {data.specifications && (
            <div className="mb-6 flex-grow">
              <h4 className="font-medium text-sm text-gray-700 mb-3 flex items-center gap-2">
                <Info size={16} className="text-primary" />
                <span>Specifications</span>
              </h4>
              <ul className="space-y-2">
                {data.specifications.map((spec, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-orange-700/20 before:rounded-full"
                  >
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div
            onClick={() => setEnquiryForm(true)}
            className="w-full bg-primary cursor-pointer text-white py-3.5 px-6 rounded-lg hover:bg-hoverBg transition-color  duration-200  font-medium group-hover:shadow-md text-center"
          >
            Enquire Now
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProductCard;
