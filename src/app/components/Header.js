import React from "react";

const Header = () => {
  const items = ["shop", "skills", "stories", "about", "contact us"];

  return (
    <div>
      <div className="flex sm:hidden">
        {" "}
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 6.5H19V8H5V6.5Z" fill="#1F2328" />
          <path d="M5 16.5H19V18H5V16.5Z" fill="#1F2328" />
          <path d="M5 11.5H19V13H5V11.5Z" fill="#1F2328" />
        </svg>
      </div>
      <h1 className="flex justify-center sm:mt-12 text-3xl font-bold text-center">
        LOGO
      </h1>
      <ul className="flex justify-center">
        {items.map((item, index) => (
          <li
            key={index}
            className="mx-2 sm:mx-10 mt-8 sm:mt-14 mb-6 text-lg font-semibold"
          >
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Header;
