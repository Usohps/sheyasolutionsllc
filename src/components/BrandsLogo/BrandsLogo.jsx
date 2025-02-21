// import React from "react";
// import Brand1 from "../../assets/brands/1.svg";
// import Brand2 from "../../assets/brands/2.svg";
// import Brand3 from "../../assets/brands/3.svg";
// import Brand4 from "../../assets/brands/4.svg";
// import Brand5 from "../../assets/brands/5.svg";

const BrandsLogo = () => {
  return (
    <>
      <div className="container mb-12 lg:mt-40  sm:mt-0">
        <h1 className="text-center text-3xl">Our Service Beneficiaries</h1>
        <div className="py-6 md:px-32 animate-pulse flex font-extrabold flex-wrap items-center justify-evenly gap-3">
          {/* <img src={Brand1} alt="" />
          <img src={Brand2} alt="" />
          <img src={Brand3} alt="" />
          <img src={Brand4} alt="" />
          <img src={Brand5} alt="" /> */}
          <h3>ACADEMIC INSTITUTIONS</h3>
          <h3>INDEPENDENT RESEARCHERS</h3>
          <h3>NON-PROFIT ORGANIZATIONS</h3>
          <h3>BUSINESS OWNERS</h3>
          <h3>GOVERNMENT AGENCIES</h3>
        </div>
      </div>
    </>
  );
};

export default BrandsLogo;
