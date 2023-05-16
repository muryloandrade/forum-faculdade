import { Input } from "@material-ui/core";
import { Logo } from "../../components/NavBar/Navbar-styled";
import LogoImg from "../../assets/studyShare-retangle.png";
import { useNavigate } from "react-router-dom";
import { ButtonLogin } from "./login-styled";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#0E4159",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            alignItems: "center",
            backgroundColor: "#FFFF",
            padding: "100px",
            borderRadius: "10px",
            margin: "auto",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Logo
              src={LogoImg}
              style={{
                justifyContent: "center",
                borderRadius: "10px 10px 0 0",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Input placeholder="Email" />
            <Input placeholder="Senha" type="password" />
            <p style={{ color: "black" }}>esqueceu a senha?</p>
          </div>
          <div>
            <ButtonLogin onClick={() => navigate("/")}>Entrar</ButtonLogin>
          </div>
        </div>
      </div>
    </div>
  );
};
