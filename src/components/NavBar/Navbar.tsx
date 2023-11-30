import { Logo, NavBarElement, DivButtons, ButtonNavi } from "./Navbar-styled";
import { AiFillHome } from "react-icons/ai";
import { IoMdClose, IoMdSettings } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { If } from "../../operators";
import { useState } from "react";

export const NavBar = () => {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);


  const isMediumScreen = window.matchMedia("(max-width: 768px)").matches;

  return (
    <NavBarElement>
      <Logo src="https://uniessa.com.br/wp-content/uploads/2022/09/log-uniessa.png.webp" />
      <DivButtons>
        <If condition={!isMediumScreen}>
          <ButtonNavi onClick={() => navigate("/")}>
            <AiFillHome />
          </ButtonNavi>
          <ButtonNavi onClick={() => navigate("/config")}>
            <IoMdSettings />
          </ButtonNavi>
          <ButtonNavi onClick={() => navigate("/qualidade")}>
            <HiQuestionMarkCircle />
          </ButtonNavi>
          <ButtonNavi onClick={() => navigate("/login")}>
            <HiOutlineLogout />
          </ButtonNavi>
        </If>
        <If condition={isMediumScreen}>
          <ButtonNavi onClick={() => setSideBar(!sideBar)}>
            <RxHamburgerMenu />
          </ButtonNavi>
          <If condition={sideBar && isMediumScreen}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 1,
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "#164285",
              }}
            >
              <div
                id="button-close"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: "3rem",
                    color: "#72bf44",
                  }}
                  onClick={() => setSideBar(!sideBar)}
                >
                  <IoMdClose />
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "4rem",
                }}
              >
                <ButtonNavi onClick={() => navigate("/")}>
                  <AiFillHome />
                </ButtonNavi>
                <ButtonNavi onClick={() => navigate("/config")}>
                  <IoMdSettings />
                </ButtonNavi>
                <ButtonNavi onClick={() => navigate("/qualidade")}>
                  <HiQuestionMarkCircle />
                </ButtonNavi>
                <ButtonNavi onClick={() => navigate("/login")}>
                  <HiOutlineLogout />
                </ButtonNavi>
              </div>
            </div>
          </If>
        </If>
      </DivButtons>
    </NavBarElement>
  );
};
