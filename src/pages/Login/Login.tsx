import { Input } from "@material-ui/core";
import { Logo } from "../../components/NavBar/Navbar-styled";
import { NavLink, useNavigate } from "react-router-dom";
import { ButtonLogin } from "./login-styled";
import LogoUniessa from "../../assets/uniessa/logo-uniessa-top.png";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";

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
  const [email, setEmail] = useState("murylo@dev.com");
  const [password, setPassword] = useState("12345");
  const [error, setError] = useState<"ErroPass" | "ErrorEmail" | null>(null);

  const Logar = useCallback(() => {
    axios
      .get(`https://mocki.io/v1/4a711423-68c9-4539-a7d8-4acc74e285b8`)
      .then((response) => {
        const responseUser = response.data.users;
        const setU = responseUser.find(
          (responde: IUser) => responde.email === email
        );
        setUser(setU);
        if (setU.password === password) {
          setUserVerify(true);
          localStorage.setItem("user", JSON.stringify(setU));
        } else if (setU.password !== password) {
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


  const isMediumScreen = window.matchMedia("(max-width: 768px)").matches;


    const isUser = localStorage.getItem("user");

    if (isUser !== null) {
      navigate("/");
    }

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
          <div style={!isMediumScreen ? { width: "300px", height: "250px" } : { width: "150px", height: "300px" }}>
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
                defaultValue={'murylo@dev.com'}
              />
              <Input
                placeholder="Senha"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                defaultValue={'12345'}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              />
              {/* <p
                style={{
                  color: "black",
                  justifyContent: "end",
                  display: "flex",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/esqueceu-senha")}
              >
                esqueceu a senha?
              </p> */}
            </div>
            <div style={{marginTop:"1.5rem"}}>
              <ButtonLogin onClick={() => Logar()}>Entrar</ButtonLogin>
              <ButtonLogin
                onClick={() => navigate("/cadastro")}
                style={{ marginTop: "10px", border: "2px solid #164285" }}
              >
                <NavLink
                  to="/cadastro"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Cadastrar
                </NavLink>
              </ButtonLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
