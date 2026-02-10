import Container from "@/components/Container";
import { useGlobalContext } from "@/GlobalContext";
import { Link } from "react-router-dom";
import {
  contactInfo,
  paymentStructureData,
  loanData,
} from "@/components/constants";

import ApplicationStages from "/Users/chiom/Documents/projects/personal/kwaba-app/src/components/ApplicationStages";
import ApplicationsDetails from "@/components/ApplicationsDetails";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import KwabaButton from "./KwabaButton";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "./ApplicantDetails.module.css";

type BackLink = "Applications" | "Renter screening" | "Transactions";

interface ApplicantProps {
  backLinkLabel: BackLink;
}

export default function ApplicantDetails({ backLinkLabel }: ApplicantProps) {
  const { rows, displayedRows } = useGlobalContext();
  const { id } = useParams<{ id: string }>();

  const location = useLocation();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/applications");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <div className="flex justify-between">
        <div className="w-[78%]">
          <span
            onClick={() => navigate(-1)}
            className="transition duration-300 ease-in-out hover:bg-[#0000000D] cursor-pointer inline-flex items-center rounded-[0.3rem] py-2.5 px-6 mb-2"
          >
            <img src="/images/left-arrow.svg" alt="" className="w-4 mr-4" />
            <span className="text-base font-bold text-[#a8a7a7]">
              {`Back to ${backLinkLabel}`}
            </span>
          </span>
          <div className="py-8 px-6 rounded-xl text-[#082353] bg-white">
            <div className="flex justify-between p-6 bg-[#f2f8ff] rounded-xl">
              <div className="flex items-center">
                <div className="flex justify-between items-center">
                  <span className="text-white mr-6 text-7xl rounded-[0.8rem] bg-[#69c0ff] pt-4 w-32 h-32 text-center">
                    J
                  </span>
                </div>
                <div className="flex flex-col font-medium">
                  <strong className="text-[1.4rem] font-bold">
                    Johnson Balogun
                  </strong>
                  {contactInfo.slice(0, 3).map((contact, index) => {
                    return (
                      <Link
                        key={index}
                        to={contact.link}
                        target="_blank"
                        className="flex items-center text-[#585858] mt-[0.3rem]"
                      >
                        <img
                          src={contact.image}
                          className="w-4 mr-2.5"
                          alt="email icon"
                        />
                        <span className="text-sm">{contact.text}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <div className="flex items-center">
                  {contactInfo.slice(3).map((contact, index) => {
                    return (
                      <Link
                        key={index}
                        to={contact.link}
                        className={`flex items-center mr-4 text-[0.8rem] hover:shadow-[0_0_1rem_rgba(0,0,0,0.1)]  ${
                          contact.text === "Whatsapp"
                            ? "bg-[#4caf50] text-white"
                            : "bg-[#e3f1ff] text-[#51a4fb]"
                        } font-medium py-2.5 px-4 rounded-[0.3rem] transition duration-300 ease-out`}
                      >
                        <img
                          src={contact.image}
                          className="w-4 mr-2.5"
                          alt="send email icon"
                        />
                        <span className="text-sm">{contact.text}</span>
                      </Link>
                    );
                  })}
                </div>
                <div className="flex mt-4">
                  <span className="flex flex-col mr-4">
                    <span className="text-[#a7a7a7] text-[0.7rem]">
                      EMPLOYMENT STATUS
                    </span>
                    <p className="font-medium text-[#082353]">Employed</p>
                  </span>
                  <span className="flex flex-col mr-4">
                    <span className="text-[#a7a7a7] text-[0.7rem]">SALARY</span>
                    <p className="font-medium text-[#082353]">₦400,000</p>
                  </span>
                  <span className="flex flex-col mr-4">
                    <span className="text-[#a7a7a7] text-[0.7rem]">
                      ACCOMMODATION STATUS
                    </span>
                    <p className="font-medium text-[#082353]">RENT</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <div className="flex justify-between">
                <div className="flex flex-col px-8">
                  <p className="text-[0.75rem] font-bold">
                    {location.pathname !== "/transactions"
                      ? "Loan amount"
                      : "Requested amount"}
                  </p>
                  <p className="text-[#20c578] text-xl font-bold">₦850,000</p>
                  {!location.pathname.startsWith("/transactions") ? (
                    <div>
                      {paymentStructureData
                        .slice(0, 3)
                        .map((payment, index) => {
                          return (
                            <div
                              key={index}
                              className="flex justify-between  items-center py-2.5 px-0 border-b-[0.06  rem] border-b-gray-200"
                            >
                              <span className="text-[#c3c3c3] text-[0.75rem] mr-8">
                                {payment.title}
                              </span>
                              {!payment.duration ? (
                                <span className="text-[0.9rem] font-medium">
                                  {payment.amount}
                                </span>
                              ) : (
                                <span className="text-[0.9rem] font-medium">
                                  {payment.duration}
                                </span>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  ) : (
                    <div>
                      {loanData.slice(0, 2).map((loan, index) => {
                        return (
                          <div
                            key={index}
                            className="flex justify-between  items-center py-2.5 px-0 border-b-[0.063rem] border-b-gray-200"
                          >
                            <span className="text-[#c3c3c3] text-[0.713rem] mr-8">
                              {loan.title}
                            </span>
                            {!loan.duration ? (
                              <span className="text-[0.9rem] font-medium">
                                {loan.amount}
                              </span>
                            ) : (
                              <span className="text-[0.9rem] font-medium">
                                {loan.duration}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="w-[0.2rem] bg-[#0000000d]"></div>
                <div className="flex flex-col px-8">
                  <p className="text-[0.875rem]">Amount due</p>
                  <p className="text-[#20c578] text-xl font-bold">₦708,333</p>
                  {!location.pathname.startsWith("/transactions") ? (
                    <div>
                      {paymentStructureData.slice(3).map((payment, index) => {
                        return (
                          <div
                            key={index}
                            className="flex justify-between items-center py-2.5 px-0 border-b-[0.063rem] border-b-gray-200"
                          >
                            <span className="text-[#c3c3c3] text-[0.75rem] mr-8">
                              {payment.title}
                            </span>
                            {!payment.duration ? (
                              <span className="text-[0.9rem] font-medium">
                                {payment.amount}
                              </span>
                            ) : (
                              <span className="text-[0.9rem] font-medium">
                                {payment.duration}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div>
                      {loanData.slice(2).map((loan, index) => {
                        return (
                          <div
                            key={index}
                            className="flex justify-between items-center py-2.5 px-0 border-b-[0.063rem] border-b-gray-200"
                          >
                            <span className="text-[#c3c3c3] text-[0.75rem] mr-8">
                              {loan.title}
                            </span>
                            <span className="text-[0.9rem] font-medium">
                              {loan.amount}
                            </span>

                            <span className="text-[0.9rem] font-medium">
                              {loan.date}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              {location.pathname.startsWith("/applications") && (
                <div className="flex items-end">
                  {" "}
                  <Link to="/renter-screening">
                    <KwabaButton
                      htmlType="button"
                      className="bg-[#d9ffde] cursor-pointer text-[#20c578]"
                    >
                      <img
                        src="/images/tick.svg"
                        className="w-4"
                        alt="qualify tick"
                      />
                      Qualify
                    </KwabaButton>
                  </Link>
                  <KwabaButton
                    htmlType="button"
                    className="bg-[#ffe8e8] text-[#fa4444] cursor-pointer"
                    onClick={showModal}
                  >
                    <img
                      src="/images/decline-application-icon.svg"
                      className="w-4"
                      alt="decline application icon"
                    />
                    Decline
                  </KwabaButton>
                </div>
              )}

              {location.pathname.startsWith("/renter-screening") && (
                <div className="flex items-end">
                  {" "}
                  <KwabaButton
                    onClick={() => navigate(`/renter-screening/${id}/verify`)}
                    htmlType="button"
                    className="bg-[#d9ffde] text-[#20c578] cursor-pointer"
                  >
                    <img
                      src="/images/verify-renter-icon.svg"
                      className="w-4"
                      alt="verify-renter-icon"
                    />
                    Verify Renter
                  </KwabaButton>
                </div>
              )}
              {location.pathname.startsWith("/transactions") && (
                <div className="flex items-end">
                  {" "}
                  <KwabaButton
                    htmlType="button"
                    className="bg-[#ffffff] text-[#20c578] border text-[0.75rem] border-[#20c578] py-[0.4rem] px-3.5"
                  >
                    <img
                      src="/images/verify-renter-icon.svg"
                      className="w-4"
                      alt="verify renter icon"
                    />
                    Complete payment
                  </KwabaButton>
                  <KwabaButton
                    htmlType="button"
                    className="bg-[#20c578] text-[#ffffff] text-[0.75rem] border border-[#20c578] py-[0.4rem] px-3.5"
                  >
                    <img
                      src="/images/add-payment-icon.svg"
                      className="w-4"
                      alt="add payment icon"
                    />
                    Add payment
                  </KwabaButton>
                </div>
              )}
            </div>

            <Modal
              title={
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#082353",
                    widows: "80%",
                    marginBottom: "1rem",
                  }}
                >
                  What is your reason for declining the application?
                </span>
              }
              closable={true}
              closeIcon={
                <CloseOutlined
                  style={{
                    fontSize: "1.9rem",
                    fontWeight: "200",
                    strokeWidth: 1,
                  }}
                />
              }
              open={isModalOpen}
              onOk={handleOk}
              centered
              onCancel={handleCancel}
              width={718}
              okText="Decline Application"
              okButtonProps={{
                style: {
                  padding: "1.3rem 1.5rem",
                  marginLeft: "1rem",
                  cursor: "pointer",
                  fontSize: "1rem",
                  textAlign: "center",
                },
              }}
              cancelText="Cancel"
              cancelButtonProps={{
                style: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  outline: "none",
                  padding: "1rem 1.4rem",
                },
                className: styles.cancelBtn,
              }}
              styles={{
                mask: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(0.2px)",
                },
                footer: {
                  margin: "1rem 0",
                },
              }}
            >
              <div>
                <div className="flex items-center py-2 px-4 rounded-[0.3rem] hover:bg-[#0000000d] cursor-pointer transition-all duration-200 ease-out w-fit text-[0.8rem]">
                  <input
                    type="radio"
                    className="mr-2 text-[0.7rem] cursor-pointer text-[#212529]"
                  />
                  Incomplete documents
                </div>
                <div className="flex items-center py-2 px-4 rounded-[0.3rem] hover:bg-[#0000000d] cursor-pointer transition-all duration-200 ease-out w-fit text-[0.8rem]">
                  <input
                    type="radio"
                    className="mr-2 text-[0.7rem] cursor-pointer text-[#212529]"
                  />
                  Insufficient net income
                </div>
                <div className="flex items-center py-2 px-4 rounded-[0.3rem] hover:bg-[#0000000d] cursor-pointer transition-all duration-200 ease-out w-fit text-[0.8rem]">
                  <input
                    type="radio"
                    className="mr-2 text-[0.7rem] cursor-pointer text-[#212529]"
                  />
                  Unavailability in city Unserviceable employment category
                </div>
                <div className="flex items-center py-2 px-4 rounded-[0.3rem] hover:bg-[#0000000d] cursor-pointer transition-all duration-200 ease-out w-fit text-[0.8rem]">
                  <input
                    type="radio"
                    className="mr-2 text-[0.7rem] cursor-pointer text-[#212529]"
                  />
                  Unserviceable employment category
                </div>
              </div>
            </Modal>
          </div>
          <ApplicationsDetails />
        </div>
        <div className="flex flex-col bg-white rounded-[0.8rem] p-6 w-[20%]">
          <h2 className="text-[#696969] font-bold text-sm">
            APPLICATION STAGES
          </h2>
          <div className="border-b-[0.063rem] mt-2 mb-6 border-b-gray-200"></div>
          <ApplicationStages />
        </div>
      </div>
    </Container>
  );
}
