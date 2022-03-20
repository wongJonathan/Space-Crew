import React from "react";

export const ChevronTripleRightIcon: React.VFC<{ className: string }> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} h-6 w-6`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 5l7 7-7 7M5 5l7 7-7 7"
    />
  </svg>
);
