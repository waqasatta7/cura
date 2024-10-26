import React from "react";

const ProfileDropdown = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[124px] bg-white z-120 w-[171px] rounded-[8px] border-[1px] border-[#0000000D] gap-[8px] py-[8px] px-[16px] absolute top-16 right-28">
      <div className="flex justify-start items-center bg-[#0000000D] rounded-[39px] p-[8px] gap-[8px] w-[139px] h-[34px]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4436 16.5C15.4436 13.5975 12.5561 11.25 9.00109 11.25C5.44609 11.25 2.55859 13.5975 2.55859 16.5M9.00109 9C9.99566 9 10.9495 8.60491 11.6527 7.90165C12.356 7.19839 12.7511 6.24456 12.7511 5.25C12.7511 4.25544 12.356 3.30161 11.6527 2.59835C10.9495 1.89509 9.99566 1.5 9.00109 1.5C8.00653 1.5 7.0527 1.89509 6.34944 2.59835C5.64618 3.30161 5.25109 4.25544 5.25109 5.25C5.25109 6.24456 5.64618 7.19839 6.34944 7.90165C7.0527 8.60491 8.00653 9 9.00109 9V9Z"
            stroke="#434343"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 className="font-[Outfit] font-[400px] text-[14px] leading-[15.21px] text-[#434343]">
          Superman
        </h1>
      </div>
      <div className="flex justify-start items-center bg-[#0000000D] rounded-[39px] p-[8px] gap-[8px] w-[139px] h-[34px]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00016 10.0723C9.30745 10.0723 9.61173 10.0118 9.89564 9.89421C10.1795 9.77662 10.4375 9.60425 10.6548 9.38696C10.8721 9.16967 11.0444 8.91171 11.162 8.62781C11.2796 8.34391 11.3402 8.03963 11.3402 7.73233C11.3402 7.42504 11.2796 7.12076 11.162 6.83685C11.0444 6.55295 10.8721 6.29499 10.6548 6.0777C10.4375 5.86041 10.1795 5.68805 9.89564 5.57046C9.61173 5.45286 9.30745 5.39233 9.00016 5.39233C8.37955 5.39233 7.78436 5.63887 7.34553 6.0777C6.90669 6.51654 6.66016 7.11173 6.66016 7.73233C6.66016 8.35294 6.90669 8.94813 7.34553 9.38696C7.78436 9.8258 8.37955 10.0723 9.00016 10.0723Z"
            stroke="#434343"
            stroke-width="1.01982"
          />
          <path
            d="M2.71527 6.36758C4.19277 -0.127422 13.8153 -0.119922 15.2853 6.37508C16.1478 10.1851 13.7778 13.4101 11.7003 15.4051C10.9743 16.1052 10.0051 16.4965 8.99652 16.4965C7.98795 16.4965 7.01871 16.1052 6.29277 15.4051C4.22277 13.4101 1.85277 10.1776 2.71527 6.36758Z"
            stroke="#434343"
            stroke-width="1.01982"
          />
        </svg>

        <h1 className="font-[Outfit] font-[400px] text-[14px] leading-[15.21px] text-[#434343]">
          Emergency
        </h1>
      </div>
      <div className="flex justify-start items-center  w-[139px] h-[34px] gap-[8px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4697 8.46967C10.1768 8.76256 10.1768 9.23744 10.4697 9.53033L12.1893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H12.1893L10.4697 14.4697C10.1768 14.7626 10.1768 15.2374 10.4697 15.5303C10.7626 15.8232 11.2374 15.8232 11.5303 15.5303L14.5303 12.5303C14.8232 12.2374 14.8232 11.7626 14.5303 11.4697L11.5303 8.46967C11.2374 8.17678 10.7626 8.17678 10.4697 8.46967Z"
            fill="#4DA9F2"
          />
          <path
            d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4"
            stroke="#4DA9F2"
          />
        </svg>
        <h1 className="font-[Poppins] font-[400] text-[#4DA9F2] leading-[21px] text-[14px]">
          Sign Out
        </h1>
      </div>
    </div>
  );
};

export default ProfileDropdown;
