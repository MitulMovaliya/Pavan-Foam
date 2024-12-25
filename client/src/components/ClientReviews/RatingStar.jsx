import { Star, StarHalf } from "lucide-react";
import React from "react";

function RatingStar({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-5 h-5 fill-orange-500 text-orange-500" />
      )}
    </div>
  );
}

export default RatingStar;
