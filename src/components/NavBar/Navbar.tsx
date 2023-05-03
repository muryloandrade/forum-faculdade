import { Logo, NavBarElement, DivButtons,ButtonNavi } from "./Navbar-styled"
import LogoImg from "../../assets/studyShare-retangle.png"


export const NavBar = () => {
    return(
        <NavBarElement>
        <Logo src={LogoImg}/>
        <DivButtons>
            <ButtonNavi>Home</ButtonNavi>
            <ButtonNavi>Perfil</ButtonNavi>
            <ButtonNavi>Logout</ButtonNavi>
        </DivButtons>
    </NavBarElement>
    )
}