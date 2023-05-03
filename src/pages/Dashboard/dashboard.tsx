
import { Publi } from "../../components/Publicação/publi"
import { NavBar,DivPubli,DivPubli2,Logo } from "./dashboard-styled"
import LogoImg from "../../assets/studyShare-retangle.png"


export const Dashboard = () => {
    return (
        <>
            <NavBar>
                <Logo src={LogoImg}/>
                <div>
                    <button>Home</button>
                    <button>Perfil</button>
                    <button>Logout</button>
                </div>
            </NavBar>
            <DivPubli2>

            <DivPubli>
                <Publi />
            </DivPubli>
            </DivPubli2>
        </>
    )
}