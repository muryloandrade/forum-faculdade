import { Logo, NavBarElement, DivButtons, ButtonNavi } from "./Navbar-styled";
import LogoImg from "../../assets/studyShare-retangle.png";
import { AiFillHome } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <NavBarElement>
      <Logo src="https://uniessa.com.br/wp-content/uploads/2022/09/log-uniessa.png.webp" />
      <DivButtons>
        <ButtonNavi>
          <AiFillHome />
        </ButtonNavi>
        <ButtonNavi>
          <IoMdSettings />
        </ButtonNavi>
        <ButtonNavi onClick={() => navigate("/login")}>
          <HiOutlineLogout />
        </ButtonNavi>
      </DivButtons>
    </NavBarElement>
  );
};
