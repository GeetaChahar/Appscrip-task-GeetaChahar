import React from "react";

const Header = () => {
  const items = ["shop", "skills", "stories", "about", "contact us"];

  return (
    <div>
      <h1 className="flex justify-center mt-12 text-3xl font-bold">LOGO</h1>
      <ul className="flex justify-center">
        {items.map((item, index) => (
          <li key={index} className="mx-10 mt-14 mb-6 text-lg font-semibold">
            {item.toUpperCase()}
          </li>
        ))}
      </ul>

      <hr />
    </div>
  );
};

export default Header;
