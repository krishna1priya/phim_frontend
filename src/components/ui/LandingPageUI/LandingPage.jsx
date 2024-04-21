import React from "react";
import Navbar from "./Navbar";
import WhyUsSection from "./WhyUsSection";
import { useNavigate } from "react-router-dom";
import FAQ from "./FAQsection";
import Footer from "./Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Patient-and-Health-Insurance-Management-System-Group20-Frontend1/register");
  };

  return (
    <>
      <Navbar />
      <div className="flex  laptop:h-[800px] h-[500px]">
        <div className="flex flex-col mt-[50px] laptop:mt-0 laptop:flex-row items-center laptop:justify-center space-y-4 laptop:space-y-0 laptop:space-x-[80px] desktop:space-x-[250px] w-full max-w-4xl mx-auto">
          <img
            src="https://www.regionalonehealth.org/wp-content/uploads/2020/11/Appendix-6.jpg"
            className="w-[80%] laptop:ml-[105px] desktop:w-[800px] h-auto rounded-xl border-2 border-black mb-4 alptop:mb-0"
            alt="Patient and doctor"
          />
          <div className="flex flex-col items-center  laptop:bg-[#E0CCBE] laptop:p-5 rounded-3xl  laptop:border-4 laptop:border-[#dba984] laptop:shadow-xl">
            <h1 className="laptop:text-[45px] text-[22px] laptop:w-[450px] text-[#3C3633] mb-7 text-center font-bold">
              Welcome to Patient and Insurance Management!
            </h1>
            <button
              type="button"
              onClick={handleNavigate}
              className="text-white text-lg bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
            >
              New User? Register Here!
            </button>
          </div>
        </div>
      </div>
      <WhyUsSection />
      <FAQ />
      <div className="bg-[#747264] h-[100px]"></div>
      <Footer />
    </>
  );
};

export default LandingPage;

//https://www.colorhunt.co/palette/eeedebe0ccbe7472643c3633
