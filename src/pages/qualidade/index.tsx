import { useNavigate } from "react-router-dom";
import "./card.css";
import { NavBar } from "../../components/NavBar/Navbar";

export const Quality = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div style={{ padding: "2rem" }}>
        <span>
          Seguindo as orientações da{" "}
          <span style={{ fontWeight: 700, padding: "0rem", margin: "0rem" }}>
            ONU
          </span>
          , nós do grupo Fórum, desenvolvemos essa página para dar indicações
          para nossos alunos de como aumentar sua produtividade no estudo!
        </span>
        <p>Abaixo segue os botões para você alcançar algumas dicas:</p>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div
            className="card"
            onClick={() => navigate("/qualidade/orthography")}
          >
            Orientações de ortografia
          </div>
          <div
            className="card"
            onClick={() => navigate("/qualidade/discipline")}
          >
            Orientações de Disciplina
          </div>
        </div>
      </div>
    </div>
  );
};
