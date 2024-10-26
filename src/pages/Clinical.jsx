import React, { useState } from "react";
import logo from "../assets/logo.png";
import ProfileDropdown from "../components/modals/ProfileDropdown";

const Clinical = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(true);

  const tabs = [
    "Active",
    "Programs",
    "My Patients",
    "OPD",
    "Notifications",
    "PatientsByLocation",
    "All",
  ];
  return (
    <div className="flex flex-col justify-start items-between z-20 mx-auto py-[8px] px-[12px] w-[1463px] h-[956px]">
      <div className="flex justify-between items-center mx-auto w-[1463px] h-[76px] pt-[8px] pb-[16px] px-[100px]">
        <div className="flex gap-[10px]">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="44" height="44" rx="22" fill="#4DA9F2" />
            <path
              d="M10.7587 23.1178C10.3161 20.0412 10.0947 18.5029 10.7252 17.1877C11.3558 15.8725 12.6979 15.073 15.382 13.474L16.9977 12.5116C19.4352 11.0596 20.654 10.3336 22.0007 10.3336C23.3473 10.3336 24.5661 11.0596 27.0036 12.5116L28.6193 13.474C31.3034 15.073 32.6455 15.8725 33.2761 17.1877C33.9066 18.5029 33.6853 20.0412 33.2426 23.1178L32.9173 25.378C32.3487 29.33 32.0644 31.306 30.6935 32.4865C29.3225 33.6669 27.3121 33.6669 23.2911 33.6669H20.7102C16.6892 33.6669 14.6788 33.6669 13.3078 32.4865C11.9369 31.306 11.6526 29.33 11.084 25.378L10.7587 23.1178Z"
              stroke="white"
              stroke-width="1.75"
            />
            <path
              d="M18.5 26.6667C19.4921 27.402 20.6987 27.8333 22 27.8333C23.3013 27.8333 24.5079 27.402 25.5 26.6667"
              stroke="white"
              stroke-width="1.75"
            />
          </svg>
        </div>
        <div
          onClick={() => setShowProfileModal(!showProfileModal)}
          className="flex justify-center items-center cursor-pointer py-[8px] px-[16px] w-[82px] h-[40px] bg-[#F6F6F6] gap-[8px] rounded-[114px]"
        >
          <svg
            width="18"
            height="24"
            viewBox="0 0 18 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 15.6182C13.8802 15.6182 18 16.4212 18 19.5225C18 22.6238 13.8537 23.4 9 23.4C4.11984 23.4 0 22.5958 0 19.4957C0 16.3945 4.14507 15.6182 9 15.6182ZM9 0.600006C12.3055 0.600006 14.9552 3.28396 14.9552 6.63222C14.9552 9.98047 12.3055 12.6644 9 12.6644C5.69452 12.6644 3.04484 9.98047 3.04484 6.63222C3.04484 3.28396 5.69452 0.600006 9 0.600006Z"
              fill="#B1B1B1"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9328 10.2166L12.899 14.2504C12.4226 14.7268 11.6431 14.7268 11.1667 14.2504L7.13281 10.2166"
              stroke="#333A44"
              stroke-width="1.6"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {showProfileModal && <ProfileDropdown />}
      </div>
      <div className=" border-b-[1px] border-[#0000000D] w-[100%] p-0"></div>

      <div className="flex flex-col justify-start items-start border-[1px] border-[#0000000D] w-[1263px] mx-auto mt-4 h-[797px] rounded-[16px] py-[20px] px-[32px] gap-[43px] shadow-[0px_4px_12px_#00000008]">
        <div className="flex justify-start items-center gap-4">
          {tabs.map((item) => (
            <div className="rounded-[8px] py-[8px] px-[16px] bg-[#F8F8F8]">
              <h1 className="font-[Poppins] font-[400] text-[12px] leading-[18px] text-[#949494]">
                {item}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex justify-start items-start gap-[20px]">
          <div className="flex flex-col justify-center items-center w-[112px] h-[154px] rounded-[8px] border-[1px] border-[##0000000D]  space-y-[10px]">
            <svg
              width="60"
              height="62"
              viewBox="0 0 60 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[58.9px] h-[62px]"
            >
              <rect
                x="0.550781"
                width="58.9"
                height="62"
                rx="29.45"
                fill="#F6F6F6"
              />
              <path
                d="M30.0004 35.362C35.8837 35.362 40.8504 36.3301 40.8504 40.0688C40.8504 43.8076 35.8518 44.7434 30.0004 44.7434C24.1171 44.7434 19.1504 43.7739 19.1504 40.0366C19.1504 36.2978 24.1475 35.362 30.0004 35.362ZM30.0004 17.2567C33.9853 17.2567 37.1797 20.4924 37.1797 24.5289C37.1797 28.5654 33.9853 31.801 30.0004 31.801C26.0154 31.801 22.8211 28.5654 22.8211 24.5289C22.8211 20.4924 26.0154 17.2567 30.0004 17.2567Z"
                fill="#B1B1B1"
              />
            </svg>
            <h1 className="font-[Outfit] font-[700] text-[12px] leading-[15.12px] text-[#434343]">
              Tamra Wan
            </h1>
            <h1 className="font-[Outfit] font-[400] text-[12px] leading-[15.12px] text-[#949494]">
              56688yhf
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center w-[112px] h-[154px] rounded-[8px] border-[1px] border-[##0000000D]  space-y-[10px]">
            <svg
              width="60"
              height="62"
              viewBox="0 0 60 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[58.9px] h-[62px]"
            >
              <rect
                x="0.550781"
                width="58.9"
                height="62"
                rx="29.45"
                fill="#F6F6F6"
              />
              <path
                d="M30.0004 35.362C35.8837 35.362 40.8504 36.3301 40.8504 40.0688C40.8504 43.8076 35.8518 44.7434 30.0004 44.7434C24.1171 44.7434 19.1504 43.7739 19.1504 40.0366C19.1504 36.2978 24.1475 35.362 30.0004 35.362ZM30.0004 17.2567C33.9853 17.2567 37.1797 20.4924 37.1797 24.5289C37.1797 28.5654 33.9853 31.801 30.0004 31.801C26.0154 31.801 22.8211 28.5654 22.8211 24.5289C22.8211 20.4924 26.0154 17.2567 30.0004 17.2567Z"
                fill="#B1B1B1"
              />
            </svg>
            <h1 className="font-[Outfit] font-[700] text-[12px] leading-[15.12px] text-[#434343]">
              Tamra Wan
            </h1>
            <h1 className="font-[Outfit] font-[400] text-[12px] leading-[15.12px] text-[#949494]">
              56688yhf
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinical;
