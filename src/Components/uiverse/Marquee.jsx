import React from "react";

const Marquee = ({
  items,
  speed = 20, // Speed in seconds
  reverse = true,
  vertical = false,
  pauseOnHover = false,
}) => {
  return (
    <div
      className="overflow-hidden relative w-full h-full"
    >
      <div
        className={`flex ${vertical ? "flex-col" : "flex-row"} whitespace-nowrap`}
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {items.concat(items).map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="h-12 mx-4"
          />
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            from { transform: ${vertical ? "translateY(0)" : "translateX(0)"}; }
            to { transform: ${vertical ? "translateY(-50%)" : "translateX(-50%)"}; }
          }
          .hover-pause:hover { animation-play-state: ${pauseOnHover ? "paused" : "running"}; }
        `}
      </style>
    </div>
  );
};

export default Marquee;
