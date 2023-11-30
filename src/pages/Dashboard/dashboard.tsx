import { Publi } from "../../components/Publicação/publi";
import { DivPubli, DivPubli2 } from "./dashboard-styled";
import { NavBar } from "../../components/NavBar/Navbar";
import { NewPublic } from "../../components/newPublic";
import { useEffect, useState } from "react";
import { Coments } from "../../components/coments/Coments";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [getPost, setGetPost] = useState<boolean>(false);
  const [coments, setComents] = useState(false);
  const [idPost, setIdPost] = useState("");


  const isUser = localStorage.getItem("user");

  console.log(isUser);

  const navigate = useNavigate();


    useEffect(() => {


  if (isUser === null) {
    navigate("/login");
  }
}
, [isUser, navigate]);

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
