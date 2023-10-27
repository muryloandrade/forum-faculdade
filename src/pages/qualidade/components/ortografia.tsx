import { HiArrowLeft } from "react-icons/hi";
import { NavBar } from "../../../components/NavBar/Navbar";
import { useNavigate } from "react-router-dom";

export const Orthography = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div style={{ padding: "2rem" }}>
        <div className="arrow" onClick={() => navigate("/qualidade")}>
          <HiArrowLeft />
        </div>
        <h1>DICAAAAAAAAAAAAS</h1>
        <p>dica 2 kddksnmfdknfdknfd</p>
      </div>
    </>
  );
};
