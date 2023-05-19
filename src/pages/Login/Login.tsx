import { Input } from "@material-ui/core";
import { Logo } from "../../components/NavBar/Navbar-styled";
import LogoImg from "../../assets/studyShare-retangle.png";
import { useNavigate } from "react-router-dom";
import { ButtonLogin } from "./login-styled";
import LogoUniessa from "../../assets/uniessa/logo-uniessa-top.png";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

interface IUser {
  nameUser: string;
  email: string;
  password: string;
  id: string;
  photo: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const [userVerify, setUserVerify] = useState<boolean>(false); // [
  const [user, setUser] = useState<IUser>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<"ErroPass" | "ErrorEmail" | null>(null);

  const Logar = useCallback(() => {
    axios
      .get(`http://localhost:7010/users?email=${email}`)
      .then((response) => {
        setUser(response.data[0]);
        if (response.data[0].password === password) {
          setUserVerify(true);
        } else if (response.data[0].password !== password) {
          setError("ErroPass");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("ErrorEmail");
      });
  }, [email, password]);

  useEffect(() => {
    if (userVerify) {
      navigate("/", { state: user });
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [userVerify, navigate, user]);

  return (
    <div style={{ display: "flex" }}>
      {error === "ErroPass" && (
        <div
          style={{
            position: "absolute",
            zIndex: 999,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Alert severity="error">Senha Incorreta</Alert>
        </div>
      )}
      {error === "ErrorEmail" && (
        <div
          style={{
            position: "absolute",
            zIndex: 999,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Alert severity="warning">Email não encontrado</Alert>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#164285",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            alignItems: "center",
            backgroundColor: "white",
            padding: "80px",
            borderRadius: "10px",
            margin: "auto",
            gap: "20px",
          }}
        >
          <div style={{ width: "300px", height: "250px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Logo
                src={LogoUniessa}
                style={{
                  justifyContent: "center",
                  borderRadius: "10px 10px 0 0",
                  width: "100%",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Senha"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              />
              <p
                style={{
                  color: "black",
                  justifyContent: "end",
                  display: "flex",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/esqueceu-senha")}
              >
                esqueceu a senha?
              </p>
            </div>
            <div>
              <ButtonLogin onClick={() => Logar()}>Entrar</ButtonLogin>
              <ButtonLogin
                onClick={() => navigate("/cadastro")}
                style={{ marginTop: "10px", border: "2px solid #164285" }}
              >
                Cadastrar
              </ButtonLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
