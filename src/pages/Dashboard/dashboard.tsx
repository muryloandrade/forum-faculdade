import { Publi } from "../../components/Publicação/publi";
import { DivPubli, DivPubli2 } from "./dashboard-styled";
import { NavBar } from "../../components/NavBar/Navbar";
import { NewPublic } from "../../components/newPublic";
import { useState } from "react";

export const Dashboard = () => {
  const [getPost, setGetPost] = useState<boolean>(false);

  return (
    <>
      <NavBar />
      <DivPubli2>
        <DivPubli>
          <NewPublic setGet={setGetPost} />
          <Publi get={getPost} />
        </DivPubli>
      </DivPubli2>
    </>
  );
};
