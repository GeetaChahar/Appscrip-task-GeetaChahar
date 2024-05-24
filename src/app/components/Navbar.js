import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="mx-28 lg:mx-80 my-10 text-center">
        <h2 className="text-4xl my-8">DISCOVER OUR PRODUCTS</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          commodi officiis esse perspiciatis porro, asperiores, culpa magni non
          delectus itaque earum tempore possimus quam debitis.
        </p>
      </div>

      <hr />
      <div className="flex justify-between mx-6 mt-4">
        <div className="flex gap-14 items-baseline">
          <b>3425 ITEMS</b>{" "}
          <h5 className="text-gray-400">
            <span className="mr-2">&#11164;</span>
            <span className="cursor-pointer underline">HIDE FILTER</span>
          </h5>
        </div>

        <b className="cursor-pointer">
          RECOMMENDED <span className="mr-2">&#11167;</span>
        </b>
      </div>
    </>
  );
};

export default Navbar;
