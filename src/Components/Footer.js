import React from "react";

function Footer() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        onClick={goToTop}
        className=" cursor-pointer bg-amazon_blue-light text-white text-lg text-center border rounded-sm whitespace-nowrap  p-1  py-2"
      >
        Back to Top
      </div>
      <div className=" bg-amazon_blue border rounded-sm p-1  py-2">
        <div className="text-white text-xl text-center whitespace-nowrap">
          Developed by Abhilash R Prasad
        </div>
      </div>
    </>
  );
}

export default Footer;
