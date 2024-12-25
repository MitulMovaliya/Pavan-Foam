import React from "react";
import RatingStar from "./RatingStar";
import { CircleCheck } from "lucide-react";

function ClientReviewsCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-orange-500">
      <div className="flex items-center mb-6 gap-2">
        <div className="relative">
          <img
            src={"vite.svg"}
            alt={"g"}
            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-orange-100"
          />
          <div className="absolute -bottom-2 right-2">
            <CircleCheck className="w-7 h-7 text-white fill-orange-500" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">Mitul</h3>
          <p className="text-orange-600 text-sm font-medium">Owner</p>
          <p className="text-gray-500 text-sm">M2P</p>
        </div>
      </div>

      <RatingStar rating={5} />

      <p className="mt-4 text-gray-600 leading-relaxed italic">
        "The team exceeded our expectations in every way. Their attention to
        detail and creative solutions helped us achieve remarkable results"
      </p>
    </div>
  );
}

export default ClientReviewsCard;
