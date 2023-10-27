import { useNavigate } from "react-router-dom";
import { NavBar } from "../../../components/NavBar/Navbar";
import { HiArrowLeft } from "react-icons/hi";
import "./arrow.css";

export const Discipline = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div style={{ padding: "2rem" }}>
        <div className="arrow" onClick={() => navigate("/qualidade")}>
          <HiArrowLeft />
        </div>
        <p>teste</p>
      </div>
    </>
  );
};
