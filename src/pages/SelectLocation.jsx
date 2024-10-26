import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SelectLocation = () => {
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

      <div className="flex flex-col justify-center items-center gap-[24px] p-[32px] rounded-[32px] my-auto w-[487px] h-[252px] border-[1px] border-[#0000000D]">
        <div className="flex justify-between items-center w-[423px] h-[36px] gap-[24px]">
          <h1 className="font-[Poppins] font-[600] text-[20px] leading-[30px]">
            Select Login Location
          </h1>
          <div className="py-auto border-[1px] border-[##0000001A] rounded-[8px] h-[36px] w-[36px] p-[12px] gap-[8px]">
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 5.16688L10.6669 0.5L12 1.83312L7.33312 6.5L12 11.1669L10.6669 12.5L6 7.83312L1.33312 12.5L0 11.1669L4.66688 6.5L0 1.83312L1.33312 0.5L6 5.16688Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
        </div>
        {/* <input
          type="text"
          placeholder="Select Location"
          className="h-[50px] w-full border-[1px] border-[#0000000D] rounded-[10px] p-[16px]"
        /> */}

        <select className="h-[50px] w-full border-[1px] border-[#0000000D] rounded-[10px] p-[12px] outline-none">
          <option value="" disabled selected className="">
            Select Location
          </option>
          <option value="location1">Emergency</option>
          <option value="location2">General Ward</option>
          <option value="location3">OPD 1</option>
          <option value="location3">OPD 2</option>
          <option value="location3">Pediatric Ward</option>
          <option value="location3">Registration Desk</option>
        </select>

        <button
          onClick={() => navigate("/SelectLogin")}
          className="flex justify-center items-center font-[Outfit] font-[400] text-[16px] w-[423px] h-[52px] text-white rounded-[10px] border-[1px] bg-[#4DA9F2] p-[16px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectLocation;
