import { Publi } from "../../components/Publicação/publi";
import { DivPubli, DivPubli2 } from "./dashboard-styled";
import { NavBar } from "../../components/NavBar/Navbar";
import { NewPublic } from "../../components/newPublic";

export const Dashboard = () => {
  return (
    <>
      <NavBar />
      <DivPubli2>
        <DivPubli>
          <NewPublic />
          <Publi />
        </DivPubli>
      </DivPubli2>
    </>
  );
};
