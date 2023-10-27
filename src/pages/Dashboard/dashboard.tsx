import { Publi } from "../../components/Publicação/publi";
import { DivPubli, DivPubli2 } from "./dashboard-styled";
import { NavBar } from "../../components/NavBar/Navbar";
import { NewPublic } from "../../components/newPublic";
import { useEffect, useState } from "react";
import { Coments } from "../../components/coments/Coments";

export const Dashboard = () => {
  const [getPost, setGetPost] = useState<boolean>(false);
  const [coments, setComents] = useState(false);
  const [idPost, setIdPost] = useState("");
  const mode = JSON.parse(localStorage.getItem("light") || "{}");

  useEffect(() => {
    localStorage.setItem("light", JSON.stringify(mode));
  }, [mode]);

  if (mode === true) {
    document.body.style.backgroundColor = "#fff";
  } else {
    document.body.style.backgroundColor = "#1c1c1c";
  }

  return (
    <>
      <NavBar />
      <DivPubli2>
        <DivPubli>
          <NewPublic setGet={setGetPost} />
          <Publi
            get={getPost}
            coments={coments}
            setComents={setComents}
            setIdpost={setIdPost}
          />
        </DivPubli>
      </DivPubli2>
      {coments && (
        <Coments idpost={idPost} coments={coments} setComents={setComents} />
      )}
    </>
  );
};
