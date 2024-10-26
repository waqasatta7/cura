import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start items-center mx-auto mt-[19.27px] w-[1463px] h-[956px]">
      <div className="flex justify-between items-center w-[1252.52px] h-[40.09px]">
        <div>
          <img src={logo} alt="logo" className="w-[110px] h-[29.62px]" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <h1>Select Locale</h1>
          <div className="flex items-center justify-center bg-[#F6F6F6] rounded-[20px] w-[103px] h-[40px] py-[10px] px-[12px] gap-[8px]">
            <h1>English</h1>
            <svg
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M0.521511 0.919555L3.79996 4.198C4.18714 4.58518 4.8207 4.58518 5.20788 4.198L8.48633 0.919556"
                stroke="#393A44"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[64px] w-[625px] h-[806px]">
        <div className="flex flex-col justify-center items-center gap-[24px]">
          <h1 className="text-[54px] font-[Outfit] font-[700] leading-[68.04px] w-[150px] h-[68px]">
            Log In
          </h1>
          <h1 className="text-[14px] font-[Outfit] font-[400]">
            Welcome back! Sign in to access your Account
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center w-[562px] h-[132px] gap-[32px]">
          <input
            type="text"
            placeholder="Enter Address"
            className="h-[50px] w-full border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px]"
          />
          <input
            type="text"
            placeholder="Password"
            className="h-[50px] w-full border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px]"
          />
        </div>

        <button
          onClick={() => navigate("/SelectLocation")}
          className="flex justify-center items-center font-[Outfit] font-[400] w-[562px] h-[52px] text-white rounded-[10px] border-[1px] bg-[#4DA9F2] p-[16px]"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
