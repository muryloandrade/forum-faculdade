
import { Publi } from "../../components/Publicação/publi"
import { DivPubli,DivPubli2 } from "./dashboard-styled"
import { NavBar } from "../../components/NavBar/Navbar"


export const Dashboard = () => {
    return (
        <>
            <NavBar />
            <DivPubli2>

            <DivPubli>
                <Publi />
            </DivPubli>
            </DivPubli2>
        </>
    )
}