import { Input } from "@material-ui/core";
import { Logo } from "../../components/NavBar/Navbar-styled";
import LogoImg from "../../assets/studyShare-retangle.png";
import { useNavigate } from "react-router-dom";
import { ButtonLogin } from "./login-styled";
import LogoUniessa from "../../assets/uniessa/logo-uniessa-top.png";
import { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(false);
      }
    });
    return () => AuthCheck();
  }, []);
  const Auth = async (email: string, password: string) => {
    try {
      const usr = await signInWithEmailAndPassword(auth, email, password);
      const token = (await usr.user.getIdTokenResult()).token;
      axios
        .get("https://login-client-om32e3yzoa-uc.a.run.app/authentication", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log(response.data, "Deu bom o login");
          navigate("/");
        })
        .catch((error) => {
          console.log(error.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const Logar = useCallback(() => {
    Auth(email, password);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);
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
