import { useNavigate } from "react-router-dom";
import "./card.css";
import { NavBar } from "../../components/NavBar/Navbar";

export const Quality = () => {
  const navigate = useNavigate();
    const isMediumScreen = window.matchMedia("(max-width: 768px)").matches;
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
        <div
          style={
            isMediumScreen
              ? { display: "flex", gap: "2rem",flexDirection:"column" }
              : { display: "flex", gap: "2rem" }
          }
        >
          <div
            className="card"
            onClick={() => navigate("/qualidade/orthography")}
          >
            {/* <img
              src="https://infinittusexatas.com.br/wp-content/uploads/2021/04/ortografia-uso-dos-porques-portugues-resumo-e-mapa-mental-1.jpeg"
              style={{
                width: "15rem",
                height: "15rem",
              }}
            /> */}
            <p>Dicas ortográficas</p>
          </div>
          <div
            className="card"
            onClick={() => navigate("/qualidade/discipline")}
          >
            Estratégia de estudos para os alunos
          </div>
          <div className="card" onClick={() => navigate("/qualidade/genero")}>
            Igualdade de gênero na educação
          </div>
        </div>
      </div>
    </div>
  );
};
