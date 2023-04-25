
import { Publi } from "../../components/Publicação/publi"
import { NavBar,DivPubli,DivPubli2 } from "./dashboard-styled"

export const Dashboard = () => {
    return (
        <>
            <NavBar>
                <h1>Fórum</h1>
                <div>
                    <button>Home</button>
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