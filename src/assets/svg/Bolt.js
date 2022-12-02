import React from "react";

export default function Bolt({className=''}) {
  return (
    <svg
      width="25pt"
      height="25pt"
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
	  fill="#0f4cff"
	  className={`${className}`}
    >
      <path d="m482.83 240.69c-2.0156-3.4062-5.6914-5.4883-9.6328-5.4883h-100.8v-168c0-5.1289-3.4727-9.5859-8.4219-10.84-4.9492-1.2539-10.148 1.0078-12.59 5.4883l-134.4 246.4c-1.8828 3.4492-1.8125 7.6836 0.20312 11.066 1.9922 3.4062 5.668 5.4883 9.6094 5.4883h100.8v168c0 5.1289 3.4727 9.5859 8.4219 10.84 0.91797 0.24609 1.8594 0.35938 2.7773 0.35938 4.0312 0 7.8398-2.1953 9.832-5.8477l134.4-246.4c1.8828-3.4492 1.8164-7.6836-0.19922-11.066z" />
    </svg>
  );
}
