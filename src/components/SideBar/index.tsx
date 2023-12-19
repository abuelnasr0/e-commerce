import { useState } from "react";
import SideBarItem from "../SideBarItem";
import DarkModeButton from "../DarkModeButton";
import { DarkModeButtonSize } from "../DarkModeButton/types";
import { useContext } from "react";
import { UserContext } from "../../components/contexts/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();

  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className={`w-screen`}>
      {/* the button */}
      <div
        className={`${
          opened ? "w-0 translate-x-full" : "w-8"
        } fixed fill-secondary transition-all duration-300 cursor-pointer mt-3 ml-3`}
        onClick={() => {
          setOpened((o) => !o);
        }}
      >
        <svg viewBox="0 0 16 16">
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>

      <div
        className={`w-9/12 h-screen sm:w-72 ${
          opened ? "" : "-translate-x-full"
        } 
        bg-primary transition-all duration-300 fixed z-50 overflow-y-scroll	`}
      >
        <div
          className={`w-full h-full flex flex-col items-start justify-start`}
        >
          {/* list */}
          <div className="flex flex-col w-full h-full items-start justify-start divide-y-2 ">
            <div className="w-full flex flex-row justify-between items-center h-16 ">
              <div className="pl-4 text-2xl font-extrabold	text-primary uppercase">
                Logo
              </div>
              <div
                className="mb-7 cursor-pointer"
                onClick={() => {
                  setOpened((o) => !o);
                }}
              >
                <svg
                  className={`${
                    opened ? "w-7" : "w-0"
                  } fill-secondary transition-all duration-300`}
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
                </svg>
              </div>
            </div>
            <div className="py-4 w-11/12">
              <p className="float-left px-4 text-xs text-primary uppercase font-thin	mb-2">
                Overview
              </p>
              <div className="flex flex-col w-full items-start justify-center  ">
                <SideBarItem
                  onClick={() => {
                    navigate("dashboard");
                  }}
                  name={"Dashboard"}
                  icon={
                    <svg viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z" />
                    </svg>
                  }
                />
                <SideBarItem
                  onClick={() => {
                    navigate("products");
                  }}
                  name={"Products"}
                  icon={
                    <svg viewBox="0 0 16 16">
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />{" "}
                    </svg>
                  }
                />
                <SideBarItem
                  onClick={() => {
                    navigate("statistics");
                  }}
                  name={"Statistics"}
                  icon={
                    <svg viewBox="0 0 16 16">
                      <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                    </svg>
                  }
                />
                <SideBarItem
                  onClick={() => {
                    navigate("massages");
                  }}
                  name={"Massages"}
                  icon={
                    <svg viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />{" "}
                    </svg>
                  }
                />
                <SideBarItem
                  onClick={() => {
                    navigate("calender");
                  }}
                  name={"Calender"}
                  icon={
                    <svg viewBox="0 0 16 16">
                      <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
                    </svg>
                  }
                />
                <SideBarItem
                  onClick={() => {
                    navigate("orders");
                  }}
                  name={"Orders"}
                  icon={
                    <svg viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm16 6H4v10h16V9zm-.236-2l-1-2H5.237l-1 2h15.527zM13 14h3l-4 4-4-4h3v-4h2v4z" />
                    </svg>
                  }
                />
              </div>
            </div>
            <div className="py-4 w-11/12">
              <p className="float-left px-4 text-xs text-primary uppercase font-thin mb-2	">
                acount
              </p>
              <div className="flex flex-col w-full items-center justify-center ">
                <SideBarItem
                  onClick={() => {
                    navigate("chat");
                  }}
                  name={"Chat"}
                  icon={
                    <svg viewBox="0 0 16 16">
                      <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                    </svg>
                  }
                />
                <SideBarItem
                  onClick={() => {
                    navigate("settings");
                  }}
                  name={"Settings"}
                  icon={
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M2 12c0-.865.11-1.703.316-2.504A3 3 0 0 0 4.99 4.867a9.99 9.99 0 0 1 4.335-2.505 3 3 0 0 0 5.348 0 9.99 9.99 0 0 1 4.335 2.505 3 3 0 0 0 2.675 4.63c.206.8.316 1.638.316 2.503 0 .865-.11 1.703-.316 2.504a3 3 0 0 0-2.675 4.629 9.99 9.99 0 0 1-4.335 2.505 3 3 0 0 0-5.348 0 9.99 9.99 0 0 1-4.335-2.505 3 3 0 0 0-2.675-4.63C2.11 13.704 2 12.866 2 12zm4.804 3c.63 1.091.81 2.346.564 3.524.408.29.842.541 1.297.75A4.993 4.993 0 0 1 12 18c1.26 0 2.438.471 3.335 1.274.455-.209.889-.46 1.297-.75A4.993 4.993 0 0 1 17.196 15a4.993 4.993 0 0 1 2.77-2.25 8.126 8.126 0 0 0 0-1.5A4.993 4.993 0 0 1 17.195 9a4.993 4.993 0 0 1-.564-3.524 7.989 7.989 0 0 0-1.297-.75A4.993 4.993 0 0 1 12 6a4.993 4.993 0 0 1-3.335-1.274 7.99 7.99 0 0 0-1.297.75A4.993 4.993 0 0 1 6.804 9a4.993 4.993 0 0 1-2.77 2.25 8.126 8.126 0 0 0 0 1.5A4.993 4.993 0 0 1 6.805 15zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />{" "}
                    </svg>
                  }
                />

                <SideBarItem
                  onClick={() => {
                    setToken(null);
                  }}
                  name={"Log Out"}
                  icon={
                    <svg viewBox="0 0 16 16">
                      <path
                        fill-rule="evenodd"
                        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                      />
                    </svg>
                  }
                />

                <div className="w-full flex flex-row items-start justify-start p-5">
                  <DarkModeButton size={DarkModeButtonSize.small} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
