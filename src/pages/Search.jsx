import React, { useState } from "react";
import logo from "../assets/logo.png";
import ProfileDropdown from "../components/modals/ProfileDropdown";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(true);
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
          <div
            onClick={() => setToggleSearch(true)}
            className="flex justify-center items-center cursor-pointer w-auto py-[8px] px-[16px] gap-[8px] rounded-[114px] bg-[#F6F6F6]"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5827 10.2917C13.5556 10.2917 10.291 13.5562 10.291 17.5833C10.291 21.6104 13.5556 24.875 17.5827 24.875C21.6098 24.875 24.8743 21.6104 24.8743 17.5833C24.8743 13.5562 21.6098 10.2917 17.5827 10.2917ZM9.04102 17.5833C9.04102 12.8659 12.8653 9.04166 17.5827 9.04166C22.3001 9.04166 26.1243 12.8659 26.1243 17.5833C26.1243 22.3008 22.3001 26.125 17.5827 26.125C12.8653 26.125 9.04102 22.3008 9.04102 17.5833ZM24.2241 24.2247C24.4682 23.9806 24.8639 23.9806 25.108 24.2247L26.7746 25.8914C27.0187 26.1355 27.0187 26.5312 26.7746 26.7753C26.5305 27.0193 26.1348 27.0193 25.8907 26.7753L24.2241 25.1086C23.98 24.8645 23.98 24.4688 24.2241 24.2247Z"
                fill="#434343"
              />
            </svg>
            <h1>Search</h1>
          </div>
          <div
            onClick={() => setToggleSearch(false)}
            className="flex justify-center items-center cursor-pointer w-auto py-[8px] px-[16px] gap-[8px] rounded-[114px] bg-[#F6F6F6]"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="white" />
              <path
                d="M24 18.0001H18M18 18.0001L12 18.0001M18 18.0001L18 11M18 18.0001L18 25"
                stroke="#434343"
                stroke-linecap="round"
              />
            </svg>

            <h1>Create New</h1>
          </div>
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
      {toggleSearch ? (
        <div className="flex justify-between items-center border-[1px] border-[#0000000D] w-[1263px] h-[112px] mx-auto mt-[8px] py-[20px] px-[32px] gap-[43px] rounded-[16px] shadow-[0px_4px_12px_#00000008]">
          <div className="flex flex-col justify-center items-start w-[50%] h-[72px] gap-[12px] border-r-[1px] border-[#0000000D] pr-20">
            <h1>ID</h1>
            <div className="flex justify-center items-center gap-[10px]">
              <input
                type="text"
                placeholder="Enter ID"
                className="w-[475.5px] h-[42px] border-[1px] border-[#0000000D] rounded-[10px] p-[16px]"
              />
              <div className="bg-[#F6F6F6]  rounded-[99px] py-[12px] px-[16px] w-[82px] h-[45px]">
                <h1 className="font-[Poppins] font-[600] text-[14px]">
                  {" "}
                  Search
                </h1>
              </div>
            </div>
          </div>
          <div className="flex w-[50%] h-[72px] gap-[12px]">
            <div className="w-[218.75px] h-[72px] space-y-[10px]">
              <h1 className="font-[Outfit] font-[400] text-[16px] leading-[20.16px]">
                Name
              </h1>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-[218.75px] h-[42px] border-[1px] border-[#0000000D] rounded-[10px] p-[16px]  placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px]"
              />
            </div>
            <div className="w-[218.75px] h-[72px]  space-y-[10px]">
              <h1 className="font-[Outfit] font-[400] text-[16px] leading-[20.16px]">
                Phone Number
              </h1>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-[218.75px] h-[42px] border-[1px] border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px]"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-[1263px] space-y-8 mx-auto pt-[20px]">
          <div className="flex border-[1px] border-[#0000000D] w-full h-[363px] rounded-[16px] py-[20px] px-[32px] gap-[43px] shadow-[0px_4px_12px_#00000008]">
            <div className="flex flex-col justify-start items-start gap-[16px] w-[1031px] h-[323px]">
              <h1 className="font-[Outfit] font-[700] text-[20px] leading-[25.2px]">
                New Patient
              </h1>
              <div className="flex items-center gap-[10px]">
                <h1>Patient Identifier</h1>
                <input
                  type="text"
                  placeholder="Select Location"
                  className="w-[423px] h-[42px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                />
                <h1>Enter ID</h1>
              </div>
              <div className="flex items-center gap-[10px]">
                <h1>Patient Name</h1>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-[289px] h-[45px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                />
                <input
                  type="text"
                  placeholder="Enter Middle Name"
                  className="w-[289px] h-[45px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-[289px] h-[45px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                />
              </div>
              <div className="flex items-center gap-[10px]">
                <h1>Gender</h1>
                <select className="h-[50px] w-full border-[1px] border-[#0000000D] rounded-[10px] p-[12px] outline-none">
                  <option value="" disabled selected className="text-[#949494]">
                    Select Gender
                  </option>
                  <option value="male" className="text-[#949494]">
                    Male
                  </option>
                  <option value="female" className="text-[#949494]">
                    Female
                  </option>
                </select>
              </div>
              <div className="flex items-center gap-[10px]">
                <h1>Age</h1>
                <input
                  type="text"
                  placeholder="Year"
                  className="w-[98px] h-[37px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                />
                <input
                  type="text"
                  placeholder="Month"
                  className="w-[98px] h-[37px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                />
                <input
                  type="text"
                  placeholder="Day"
                  className="w-[98px] h-[37px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                />
              </div>
              <div className="flex items-center gap-[10px]">
                <h1>Date Of Birth</h1>
                <input
                  type="text"
                  placeholder="mm dd yy"
                  className="w-[423px] h-[42px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                />
                <h1>Estemated</h1>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start space-y-[8px]">
              <svg
                width="125"
                height="125"
                viewBox="0 0 125 125"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="125" height="125" rx="8" fill="#F6F6F6" />
                <path
                  d="M63.3312 68.9205C72.7289 68.9205 80.6625 70.4668 80.6625 76.4389C80.6625 82.411 72.678 83.9058 63.3312 83.9058C53.9336 83.9058 46 82.3572 46 76.3874C46 70.4153 53.9821 68.9205 63.3312 68.9205ZM63.3312 40C69.6966 40 74.7991 45.1685 74.7991 51.6162C74.7991 58.0639 69.6966 63.2324 63.3312 63.2324C56.9659 63.2324 51.8634 58.0639 51.8634 51.6162C51.8634 45.1685 56.9659 40 63.3312 40Z"
                  fill="#949494"
                />
              </svg>
              <div className="flex justify-center items-center gap-[8px]">
                <div className="flex justify-center items-center w-[58.5px] h-[36px] border-[1px] border-[#0000000D] rounded-[8px] gap-[10px]">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.25 3.33344L10.25 8.66675M10.25 8.66675L12.25 6.66676M10.25 8.66675L8.25 6.66676"
                      stroke="#434343"
                      stroke-width="0.999996"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.58203 10.6666H5.68886C6.29231 10.6666 6.59403 10.6666 6.85925 10.7886C7.12446 10.9106 7.32082 11.1397 7.71354 11.5978L8.11715 12.0687C8.50987 12.5269 8.70623 12.756 8.97145 12.878C9.23666 12.9999 9.53838 12.9999 10.1418 12.9999H10.3555C10.959 12.9999 11.2607 12.9999 11.5259 12.878C11.7911 12.756 11.9875 12.5269 12.3802 12.0687L12.7838 11.5978C13.1765 11.1397 13.3729 10.9106 13.6381 10.7886C13.9033 10.6666 14.205 10.6666 14.8085 10.6666H16.9153"
                      stroke="#434343"
                      stroke-width="0.999996"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16.9153 10C16.9153 13.1427 16.9153 14.7141 15.939 15.6904C14.9627 16.6667 13.3914 16.6667 10.2487 16.6667C7.10599 16.6667 5.53464 16.6667 4.55834 15.6904C3.58203 14.7141 3.58203 13.1427 3.58203 10C3.58203 6.85735 3.58203 5.286 4.55834 4.3097C5.10265 3.76538 5.83193 3.52454 6.91535 3.41797M13.582 3.41797C14.6654 3.52454 15.3947 3.76538 15.939 4.3097C16.5882 4.95886 16.8057 5.87102 16.8786 7.33332"
                      stroke="#434343"
                      stroke-width="0.999996"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="flex justify-between items-center gap-[8px]">
                  <div className="flex justify-center items-center w-[58.5px] h-[36px] border-[1px] border-[#0000000D] rounded-[8px] gap-[10px]">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5158 2.79556C14.0021 2.98914 14.346 3.33808 14.6543 3.84964L14.7559 4.02619L15.1328 4.74881L15.1452 4.76899L15.1564 4.78656L15.1884 4.83031C15.3601 5.0174 15.6475 5.13042 15.8371 5.13042C17.5744 5.13042 18.9934 6.4948 19.0804 8.21003L19.0846 8.37708V13.2062C19.0846 15.4329 17.3261 17.25 15.1226 17.3441L14.943 17.3479H6.55964C4.33242 17.3479 2.51586 15.5897 2.4218 13.3859L2.41797 13.2062V8.37708C2.41797 6.58425 3.87212 5.13042 5.66547 5.13042C5.85445 5.13042 6.1422 5.01723 6.31417 4.83031L6.32009 4.82333L6.32751 4.81361L6.37036 4.74788L6.74615 4.02642C7.08111 3.41765 7.4455 3.01069 7.98621 2.79548C8.97704 2.40149 12.5257 2.40149 13.5158 2.79556ZM8.44826 3.95694C8.26377 4.03038 8.09674 4.20035 7.91848 4.49501L7.84132 4.629L7.5206 5.24908L7.44166 5.39194C7.37577 5.50155 7.30985 5.59407 7.23459 5.67608C6.85091 6.09312 6.30002 6.334 5.81032 6.37435L5.66547 6.38042L5.52872 6.38502C4.53461 6.45224 3.73981 7.24686 3.67258 8.24041L3.66797 8.37708V13.2062C3.66797 14.7498 4.87775 16.0113 6.40098 16.0936L6.55964 16.0979H14.943C16.4862 16.0979 17.748 14.8876 17.8304 13.3649L17.8346 13.2062V8.37708C17.8346 7.3206 17.0132 6.4553 15.9739 6.38502L15.8371 6.38042L15.692 6.37435C15.2016 6.33399 14.6507 6.09305 14.2675 5.67552C14.1932 5.59461 14.1277 5.50274 14.0622 5.39406L14.0464 5.36712L14.0277 5.33366L13.9309 5.1522L13.661 4.62923C13.4787 4.29831 13.3118 4.09607 13.1316 3.99443L13.0535 3.95694L12.9541 3.92389C12.0964 3.68148 9.11331 3.6925 8.44826 3.95694ZM10.7511 7.666C12.5596 7.666 14.0252 9.13166 14.0252 10.9402C14.0252 12.7487 12.5596 14.2143 10.7511 14.2143C8.94254 14.2143 7.47689 12.7487 7.47689 10.9402C7.47689 9.13166 8.94254 7.666 10.7511 7.666ZM10.7511 8.916C9.6329 8.916 8.72689 9.82201 8.72689 10.9402C8.72689 12.0583 9.6329 12.9643 10.7511 12.9643C11.8692 12.9643 12.7752 12.0583 12.7752 10.9402C12.7752 9.82201 11.8692 8.916 10.7511 8.916ZM15.3382 7.0835C15.7985 7.0835 16.1716 7.4566 16.1716 7.91683C16.1716 8.3442 15.8499 8.69642 15.4354 8.74456L15.3382 8.75017C14.8705 8.75017 14.4974 8.37707 14.4974 7.91683C14.4974 7.48947 14.8191 7.13724 15.2335 7.08911L15.3382 7.0835Z"
                        fill="#434343"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-[1px] border-[#0000000D] w-full h-[253px] rounded-[16px] py-[20px] px-[32px] gap-[43px] shadow-[0px_4px_12px_#00000008]">
            <h1 className="font-[Outfit] font-[700] text-[20px] leading-[25.2px]">
              Address Info
            </h1>
            <div className="flex justify-between items-center">
              <div className="flex flex-col w-[548px] h-[172px] gap-[4px] space-y-[8px]">
                <div className="flex justify-between items-center space-y-[8px]">
                  <h1>House Number/Flat Number</h1>
                  <input
                    type="text"
                    placeholder=""
                    className="w-[338px] h-[42px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                  />
                </div>
                <div className="flex justify-between items-center gap-[8px]">
                  <h1>City/Village</h1>
                  <input
                    type="text"
                    placeholder=""
                    className="w-[338px] h-[42px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                  />
                </div>
                <div className="flex justify-between items-center gap-[8px]">
                  <h1>District</h1>
                  <input
                    type="text"
                    placeholder=""
                    className="w-[338px] h-[42px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[548px] h-[172px] gap-[4px] space-y-[10px]">
                <div className="flex justify-between items-center space-y-[8px]">
                  <h1>Locality/Selector</h1>
                  <input
                    type="text"
                    placeholder=""
                    className="w-[338px] h-[42px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                  />
                </div>
                <div className="flex justify-between items-center gap-[8px]">
                  <h1>PIN Code</h1>
                  <input
                    type="text"
                    placeholder=""
                    className="w-[338px] h-[42px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                  />
                </div>
                <div className="flex justify-between items-center gap-[8px]">
                  <h1>State</h1>
                  <input
                    type="text"
                    placeholder=""
                    className="w-[338px] h-[42px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#0000000D] space-y-4 w-full h-[126px] rounded-[16px] py-[20px] px-[32px] gap-[43px] shadow-[0px_4px_12px_#00000008]">
            <h1 className="font-[Outfit] font-[700] text-[20px] leading-[25.2px]">
              Other Information
            </h1>
            <div className="flex justify-between items-center w-[1199px] h-[45px]">
              <div className="flex justify-between items-center gap-[8px]">
                <h1>Phone Number</h1>
                <input
                  type="text"
                  placeholder=""
                  className="w-[338px] h-[42px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                />
              </div>
              <div className="flex justify-between items-center gap-[8px]">
                <h1>Alternate Phone Number</h1>
                <input
                  type="text"
                  placeholder=""
                  className="w-[338px] h-[42px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                />
              </div>
            </div>
            <div className="flex justify-end w-full items-center pt-8 gap-4">
              <div
                onClick={() => navigate("/Observations")}
                className="w-[327px] h-[56px] bg-[#F8F8F8] rounded-[32px] py-[17px] px-[24px]"
              >
                <h1 className="flex justify-center items-center font-[Poppins] font-[600] text-[14px] leading-[21px] ">
                  Save
                </h1>
              </div>
              <div className="flex justify-between items-center w-[327px] h-[56px] bg-[#4DA9F2] rounded-[32px] py-[18px] px-[32px]">
                <h1 className="flex justify-center items-center font-[Poppins] font-[600] text-[14px] text-[#F8F8F8] leading-[21px] ">
                  Start OPD Visit
                </h1>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.22152 10.3174L11.1557 14.2515C11.6203 14.7161 12.3805 14.7161 12.8452 14.2515L16.7793 10.3174"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
