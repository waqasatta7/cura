import React, { useState } from "react";
import logo from "../assets/logo.png";
import ProfileDropdown from "../components/modals/ProfileDropdown";
import axios from "axios";

const Observations = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showOberservations, setShowOberservations] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  // const handleObservation = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://212.1.213.140:8090/api/v1/hedis/evaluate",
  //       {
  //         measureId: "HEDIS_BCS",
  //         version: "2015.0.0",
  //         evaluationDate: "2024-01-01",
  //         patient: {
  //           id: 12345,
  //           birthDate: "1960-06-28",
  //           gender: "F",
  //           procedures: [
  //             {
  //               id: "PROC001",
  //               code: "77067",
  //               codeSystem: "2.16.840.1.113883.6.12",
  //               displayName: "Screening mammography bilateral",
  //               startDate: "2023-06-01",
  //               endDate: "2023-06-01",
  //             },
  //           ],
  //         },
  //       }
  //     );

  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const [patientDetails, setPatientDetails] = useState({});
  const handleObservation = () => {
    console.log(selectedValue);
    if (selectedValue == "Cytology") {
      setPatientDetails({
        title: "HEDIS_CCS",
        note: "You have a breast cancer disease cytology",
      });
    } else if (selectedValue == "HPV Test") {
      setPatientDetails({
        title: "HPV",
        note: "You have a Cervical cancer disease",
      });
    } else if (selectedValue == "Screening mammography bilateral") {
      setPatientDetails({
        title: "Screening mammography bilateral",
        note: "You have a mammography bilateral",
      });
    } else if (selectedValue == "Colonoscopy") {
      setPatientDetails({
        title: "HEDIS_COL",
        note: "You have a Colonoscopy",
      });
    } else if (selectedValue == "Hemoglobin A1c") {
      setPatientDetails({
        title: "Hemoglobin A1c",
        note: "You have a Hemoglobin A1c",
      });
    } else if (selectedValue == "Dilated retinal eye exam") {
      setPatientDetails({
        title: "Dilated retinal eye exam",
        note: "You have a Dilated retinal eye exam",
      });
    }
    setShowOberservations(false);
  };

  return (
    <div className="flex flex-col justify-start items-between z-20 mx-auto py-[8px] px-[12px] w-full h-[956px]">
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
      <div className="flex justify-start items-center gap-8 px-[114px] border-b-[1px] border-t-[1px] h-[61.26px] border-[#0000000D] w-[100%]">
        <svg
          width="43"
          height="46"
          viewBox="0 0 43 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="43" height="45.2632" rx="21.5" fill="#F6F6F6" />
          <path
            d="M21.4992 25.8161C25.7943 25.8161 29.4202 26.5228 29.4202 29.2523C29.4202 31.9818 25.771 32.6649 21.4992 32.6649C17.2041 32.6649 13.5781 31.9571 13.5781 29.2287C13.5781 26.4992 17.2263 25.8161 21.4992 25.8161ZM21.4992 12.5983C24.4084 12.5983 26.7404 14.9605 26.7404 17.9073C26.7404 20.8542 24.4084 23.2164 21.4992 23.2164C18.59 23.2164 16.2579 20.8542 16.2579 17.9073C16.2579 14.9605 18.59 12.5983 21.4992 12.5983Z"
            fill="#B1B1B1"
          />
        </svg>
        <div className="flex justify-center items-center gap-[4px]">
          <h1 className="font-[Outit] font-[600] text-[14px] text-[#434343] leading-[15.12px]">
            Tamra Wan
          </h1>
          <h1 className="font-[Outit] font-[400] text-[12px] text-[#949494] leading-[15.12px]">
            (56668ghf)
          </h1>
        </div>
        <h1 className="border-l-[1px] border-[#0000000D] pl-8">Male</h1>
        <h1 className="border-l-[1px] border-[#0000000D] pl-8">40 years old</h1>
      </div>

      <div className="flex flex-col justify-start items-start border-[1px] border-[#0000000D] w-[1263px] mx-auto mt-4 h-[927px] rounded-[16px] py-[20px] px-[32px] shadow-[0px_4px_12px_#00000008]">
        <div className="flex justify-start items-center gap-8">
          <div className="flex justify-start items-center gap-4">
            <div
              onClick={() => setShowOberservations(true)}
              className="rounded-[8px] py-[8px] px-[16px] bg-[#F8F8F8]"
            >
              <h1 className="font-[Poppins] font-[400] text-[12px] leading-[18px] text-[#949494]">
                Observations
              </h1>
            </div>
            <div
              onClick={() => setShowOberservations(false)}
              className="rounded-[8px] py-[8px] px-[16px] cursor-pointer"
            >
              <h1 className="font-[Poppins] border-[1px] cursor-pointer border-[#0000000D] py-[8px] px-[16px] rounded-[8px] font-[400] text-[12px] leading-[18px] text-[#949494]">
                Diagnosis
              </h1>
            </div>
          </div>
        </div>
        {showOberservations ? (
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col justify-start items-start space-y-4 border-[1px] border-[#0000000D] w-[231px] mx-auto mt-4 h-[909px] rounded-[16px] py-[20px] px-[32px]  shadow-[0px_4px_12px_#00000008]">
              <div className="w-[183px] h-[34px] bg-[#4DA9F2]  rounded-[8px] py-[8px] px-[4px]">
                <h1 className="text-white font-[Outfit] font-[400] text-[14px] text-center">
                  History and Examination
                </h1>
              </div>
              <div className="w-[183px] h-[34px] border-[1px] border-[#0000000D] rounded-[8px] py-[8px] px-[4px]">
                <h1 className="text-black font-[Outfit] font-[400] text-[14px] px-2">
                  Vitals
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start border-[1px] border-[#0000000D] w-[944px] mx-auto mt-4 h-[909px] rounded-[16px] shadow-[0px_4px_12px_#00000008]">
              <div className="w-full h-[39px] bg-[#4DA9F2] rounded-t-[8px]">
                <h1 className="flex justify-start px-4 pt-1 items-center text-white font-[Outfit] font-[600] text-[18px] ">
                  History and Examination
                </h1>
              </div>
              <h1 className="px-4 py-4">
                To add a custom chief comlaint, please choose “other genetic” in
                the Chief Complant field
              </h1>

              {/* <div className="flex flex-col justify-start items-start border-[1px] border-[#0000000D] w-[944px] mx-auto mt-4 h-[231px] rounded-[16px] shadow-[0px_4px_12px_#00000008]"> */}
              <div className="border-[1px] border-[#0000000D] w-full h-[273px] rounded-[16px] py-[20px] px-[32px] gap-[43px] shadow-[0px_4px_12px_#00000008]">
                <h1 className="font-[Outfit] font-[700] text-[20px] leading-[25.2px]">
                  Address Info
                </h1>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col w-[548px] h-[172px] gap-[4px] space-y-[8px]">
                    <div className="flex justify-between items-center space-y-[8px]">
                      <h1>Chief Complaint</h1>
                      <select
                        className="w-[338px] h-[42px] border-[1px] border-[#0000000D] rounded-[10px] p-[4px] outline-none"
                        onChange={(e) => {
                          setSelectedValue(e.target.value);
                        }}
                      >
                        <option
                          value=""
                          disabled
                          selected
                          className="text-[#949494]"
                        >
                          Select Symptoms
                        </option>
                        <option value="Colonoscopy" className="text-[#949494]">
                          Colonoscopy
                        </option>
                        <option
                          value="Screening mammography bilateral"
                          className="text-[#949494]"
                        >
                          Screening mammography bilateral
                        </option>
                        <option value="Cytology" className="text-[#949494]">
                          Cytology
                        </option>
                        <option value="HPV Test" className="text-[#949494]">
                          HPV Test
                        </option>
                        <option
                          value="Hemoglobin A1c"
                          className="text-[#949494]"
                        >
                          Hemoglobin A1c
                        </option>
                        <option
                          value="Dilated retinal eye exam"
                          className="text-[#949494]"
                        >
                          Dilated retinal eye exam
                        </option>
                      </select>
                    </div>
                    <div className="flex justify-between items-center gap-[8px]">
                      <h1>Sign/Symptom Duration</h1>
                      <input
                        type="text"
                        placeholder=""
                        className="w-[338px] h-[42px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                      />
                    </div>
                    <div className="flex justify-between items-center gap-[8px]">
                      <h1>Unit</h1>
                      <div className="bg-[#0000000D] rounded-[4px] px-[16px] py-[8px]">
                        <h6>Hours</h6>
                      </div>
                      <div className="bg-[#0000000D] rounded-[4px] px-[16px] py-[8px]">
                        <h6>Days</h6>
                      </div>
                      <div className="bg-[#0000000D] rounded-[4px] px-[16px] py-[8px]">
                        <h6>Weeks</h6>
                      </div>
                      <div className="bg-[#0000000D] rounded-[4px] px-[16px] py-[8px]">
                        <h6>Months</h6>
                      </div>
                      <div className="bg-[#0000000D] rounded-[4px] px-[16px] py-[8px]">
                        <h6>Years</h6>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-32  ml-[300px] text-center mb-4 h-[46px] bg-[#4DA9F2] rounded-[32px] py-[18px] px-[32px]">
                      <div></div>
                      <h1 className="flex justify-center items-center font-[Poppins] font-[600] text-[14px] text-[#F8F8F8] leading-[21px] ">
                        Observe
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-start space-y-8">
            <div className="w-[1199px] h-[104px] rounded-b-[16px] border-[1px] border-[#0000000D]">
              <div className="h-[36px] px-8 w-full bg-[#F6F6F6] flex justify-between items-center">
                <h1>Diagnosis</h1>
                <h1>Order</h1>
                <h1>Certainty</h1>
                <h1>Status</h1>
              </div>
              <div className="flex justify-between items-center px-[8px] pt-4">
                <div className="flex justify-between items-center px-[4px] ">
                  <input
                    type="text"
                    className="w-[156px] h-[36px] border-[1px] border-[#0000000D] rounded-[8px] gap-4"
                  />
                  <div className="w-[68px] h-[36px] border-[1px] rounded-[99px] flex justify-center items-center bg-[#0000000D]">
                    <h1 className="text-[10px]">Accept</h1>
                  </div>
                </div>

                <div className="flex justify-between items-center px-[4px] gap-4 ">
                  <div className="w-[156px] h-[36px] border-[1px] border-[#0000000D] rounded-[8px] flex justify-center items-center bg-[#0000000D]"></div>
                  <div className="w-[156px] h-[36px] border-[1px] border-[#0000000D] rounded-[8px] flex justify-center items-center bg-[#0000000D]">
                    <h1 className="text-[10px]">Secondary</h1>
                  </div>
                </div>

                <div className="flex justify-between items-center px-[4px] gap-4 ">
                  <div className="w-[68px] h-[36px] border-[1px] border-[#0000000D] rounded-[8px] flex justify-center items-center bg-[#0000000D]">
                    <h1 className="text-[10px]">Primary</h1>
                  </div>
                  <div className="w-[156px] h-[36px] border-[1px] border-[#0000000D] rounded-[8px] flex justify-center items-center bg-[#0000000D]">
                    <h1 className="text-[10px]">Secondary</h1>
                  </div>
                </div>

                <div className="flex justify-between items-center px-[4px] gap-4 ">
                  <div className="w-[68px] h-[36px] border-[1px] border-[#0000000D] rounded-[8px] flex justify-center items-center bg-[#0000000D]">
                    <h1 className="text-[10px]">Primary</h1>
                  </div>
                  <div className="w-[68px] h-[36px] border-[1px] border-[#0000000D] rounded-[8px] flex justify-center items-center bg-[#0000000D]">
                    <h1 className="text-[10px]">Secondary</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-[520px] h-[151px] border-[1px] border-[#0000000D] rounded-[8px] flex justify-center items-center bg-[#0000000D]"></div> */}
            <div className="border-[1px] border-[#0000000D] w-[520px] h-[253px] rounded-[16px] py-[20px] px-[32px] gap-[43px] shadow-[0px_4px_12px_#00000008]">
              <div className="flex justify-between items-center">
                <div className="flex flex-col w-[548px] h-[172px] gap-[4px] space-y-[8px]">
                  <div className="flex justify-between items-center space-y-[8px]">
                    <select className="w-[338px] h-[42px] border-[1px] border-[#0000000D] rounded-[10px] p-[4px] outline-none">
                      <option
                        value=""
                        disabled
                        selected
                        className="text-[#949494]"
                      >
                        Select
                      </option>
                      <option value="male" className="text-[#949494]">
                        option 1
                      </option>
                      <option value="female" className="text-[#949494]">
                        option 2
                      </option>
                    </select>
                    <div className="w-[68px] h-[36px] border-[1px] rounded-[99px] flex justify-center items-center bg-[#0000000D]">
                      <h1 className="text-[10px]">Accept</h1>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-[8px]">
                    <h1>Sign/Symptom Duration</h1>
                    <input
                      type="text"
                      placeholder=""
                      className="w-[338px] h-[42px] border-[1px] outline-none border-[#0000000D] rounded-[10px] p-[16px] placeholder:text-[14px] placeholder:font-[Outfit] placeholder:font-[400] placeholder:leading-[17.64px] placeholder:text-[#949494]"
                    />
                  </div>
                  <div className="flex justify-between items-center gap-[8px]">
                    <h1>Unit</h1>
                    <div className="bg-[#0000000D] rounded-[4px] px-[16px] py-[8px]">
                      <h6>Hours</h6>
                    </div>
                    <div className="bg-[#0000000D] rounded-[4px] px-[16px] py-[8px]">
                      <h6>Days</h6>
                    </div>
                    <div className="bg-[#0000000D] rounded-[4px] px-[16px] py-[8px]">
                      <h6>Weeks</h6>
                    </div>
                    <div className="bg-[#0000000D] rounded-[4px] px-[16px] py-[8px]">
                      <h6>Months</h6>
                    </div>
                    <div className="bg-[#0000000D] rounded-[4px] px-[16px] py-[8px]">
                      <h6>Years</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start space-y-4 border-[1px] border-[#0000000D] w-full mx-auto mt-4 h-[109px] rounded-t-[16px]  shadow-[0px_4px_12px_#00000008]">
              <div className="flex justify-start items-center w-full gap-[500px] h-[34px] bg-[#4DA9F2]  rounded-t-[8px] py-[8px] px-[12px]">
                <h1 className="text-white font-[Outfit] font-[600] text-[18px] text-center">
                  Active Condition
                </h1>
                <h1 className="text-white font-[Outfit] font-[600] text-[18px] text-center">
                  Notes
                </h1>
              </div>
              <div className="flex text-xs justify-start items-center w-full px-[12px] gap-[260px]">
                <h1>{patientDetails.title}</h1>
                <h1>Condition from 23 oct 2024 </h1>
                <h1 className="w-32">{patientDetails.note}</h1>
                <div className="flex gap-[2px]">
                  <h1 className="w-16">follow up</h1>
                  <h1 className="w-16">history of</h1>
                  <h1 className="w-12">In active</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start space-y-4 border-[1px] border-[#0000000D] w-full mx-auto h-[109px] rounded-t-[16px]  shadow-[0px_4px_12px_#00000008]">
              <div className="flex justify-start items-center w-full gap-[500px] h-[34px] bg-[#4DA9F2]  rounded-t-[8px] py-[8px] px-[12px]">
                <h1 className="text-white font-[Outfit] font-[600] text-[18px] text-center">
                  History Condition
                </h1>
                <h1 className="text-white font-[Outfit] font-[600] text-[18px] text-center">
                  Notes
                </h1>
              </div>
              <div className="flex text-xs justify-start items-center w-full px-[12px] gap-[260px]">
                <h1>No condition available </h1>
                <h1>Condition from 23 oct 2024 </h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Observations;
