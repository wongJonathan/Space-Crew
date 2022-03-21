import React from "react";

export const Circle: React.VFC<{ className?: string }> = ({ className }) => (
  <svg
    className={`${className} w-8 h-8`}
    fill="green"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="50" />
  </svg>
);
