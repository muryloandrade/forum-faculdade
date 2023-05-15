import { Input } from "@material-ui/core";
import { Logo } from "../../components/NavBar/Navbar-styled";
import LogoImg from "../../assets/studyShare-retangle.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#0E4159",
      }}
    >
      <div
        style={{
          color: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", justifyContent: "center" }}>
          <Logo src={LogoImg} />
        </div>
        <h2>Compartilhe conhecimento</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "300px",
            flexDirection: "column",
          }}
        >
          <Input placeholder="Email" />
          <Input placeholder="Senha" type="password" />
          <p>esqueceu a senha?</p>
        </div>
        <div>
          <button>Cadastrar</button>
          <button onClick={() => navigate("/")}>Entrar</button>
        </div>
      </div>
      <div>
        <img
          src="https://www.es.gov.br/Media/PortalES/_Profiles/c4d8c6e6/d8d1f292/WhatsApp%20Image%202020-07-14%20at%2012.36.56-1-1-1-1.jpeg?v=638030688078577760"
          alt="alunos estudando"
        />
      </div>
    </div>
  );
};
