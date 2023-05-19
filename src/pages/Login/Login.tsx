import { Input } from "@material-ui/core";
import { Logo } from "../../components/NavBar/Navbar-styled";
import LogoImg from "../../assets/studyShare-retangle.png";
import { useNavigate } from "react-router-dom";
import { ButtonLogin } from "./login-styled";
import LogoUniessa from "../../assets/uniessa/logo-uniessa-top.png";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { set } from "firebase/database";

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

  const Logar = useCallback(() => {
    axios
      .get(`http://localhost:7010/users?email=${email}`)
      .then((response) => {
        setUser(response.data[0]);
        if (response.data[0].password === password) {
          setUserVerify(true);
        } else if (response.data[0].password !== password) {
          alert("Senha incorreta");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Email não cadastrado");
      });
  }, [email, password]);

  useEffect(() => {
    if (userVerify) {
      navigate("/", { state: user });
    }
  }, [userVerify, navigate, user]);

  return (
    <div style={{ display: "flex" }}>
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
                  color: "white",
                  justifyContent: "end",
                  display: "flex",
                  cursor: "pointer",
                }}
              >
                esqueceu a senha?
              </p>
            </div>
            <div>
              <ButtonLogin onClick={() => Logar()}>Entrar</ButtonLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
