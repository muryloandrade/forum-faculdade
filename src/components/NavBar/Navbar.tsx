import { Logo, NavBarElement, DivButtons, ButtonNavi } from "./Navbar-styled";
import { AiFillHome } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineLogout, HiOutlineSun } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";

export const NavBar = () => {
  const navigate = useNavigate();
  const mode = JSON.parse(localStorage.getItem("light") || "{}");
  const [light, setLight] = useState(mode);

  useEffect(() => {
    localStorage.setItem("light", JSON.stringify(light));
  }, [light]);
  return (
    <NavBarElement>
      <Logo src="https://uniessa.com.br/wp-content/uploads/2022/09/log-uniessa.png.webp" />
      <DivButtons>
        <ButtonNavi onClick={() => setLight(!light)}>
          {light ? <HiOutlineSun /> : <MdDarkMode />}
        </ButtonNavi>
        <ButtonNavi onClick={() => navigate("/")}>
          <AiFillHome />
        </ButtonNavi>
        <ButtonNavi onClick={() => navigate("/config")}>
          <IoMdSettings />
        </ButtonNavi>
        <ButtonNavi onClick={() => navigate("/login")}>
          <HiOutlineLogout />
        </ButtonNavi>
      </DivButtons>
    </NavBarElement>
  );
};
