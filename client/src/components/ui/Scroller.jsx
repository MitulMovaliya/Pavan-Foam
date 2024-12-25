import React from "react";

function Scroller({ itemContainer }) {
  return (
    <div className="scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
      <ul className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll hover:[animation-play-state:paused]">
        {itemContainer.map((item, index) => (
          <li
            key={index}
            className="w-[350px] max-w-full relative rounded-2xl  flex-shrink-0  px-8 py-6 md:w-[450px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scroller;
