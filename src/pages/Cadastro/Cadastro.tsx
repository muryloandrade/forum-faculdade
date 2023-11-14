import { Input } from "@material-ui/core";
import { Logo } from "../../components/NavBar/Navbar-styled";
import LogoImg from "../../assets/studyShare-retangle.png";
import { useNavigate } from "react-router-dom";
import { ButtonLogin } from "../Login/login-styled";
import LogoUniessa from "../../assets/uniessa/logo-uniessa-top.png";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { nanoid } from "nanoid";

interface IUser {
  nameUser: string;
  email: string;
  password: string;
  id: string;
  photo: string;
}

export const Cadastro = () => {
  const navigate = useNavigate();
  const [userVerify, setUserVerify] = useState<boolean>(false); // [
  const [user, setUser] = useState<IUser>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [photo, setPhoto] = useState<string>("");
  const [selectCourse, setSelectCourse] = useState<string>("Administração");
  const [selectCategory, setSelectCategory] = useState<string>("Professor");
  const [name, setName] = useState<string>("");
  const id = nanoid();

  //   const Logar = useCallback(() => {
  //     axios
  //       .get(`http://localhost:7010/users?email=${email}`)
  //       .then((response) => {
  //         setUser(response.data[0]);
  //         if (response.data[0].password === password) {
  //           setUserVerify(true);
  //         } else if (response.data[0].password !== password) {
  //           setError("ErroPass");
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setError("ErrorEmail");
  //       });
  //   }, [email, password]);

  const courser = [
    "Administração",
    "Agronomia",
    "Arquitetura e Urbanismo",
    "Artes Visuais",
    "Biomedicina",
    "Ciência da Computação",
    "Ciências Biológicas",
    "Ciências Contábeis",
    "Ciências Econômicas",
    "Design",
    "Direito",
    "Educação Física",
    "Enfermagem",
    "Engenharia Ambiental e Sanitária",
    "Engenharia Civil",
    "Engenharia de Produção",
    "Engenharia Elétrica",
    "Engenharia Mecânica",
    "Engenharia Química",
    "Estética e Cosmética",
    "Farmácia",
    "Fisioterapia",
    "Fonoaudiologia",
    "Gastronomia",
    "Gestão Comercial",
    "Gestão de Recursos Humanos",
    "Gestão Financeira",
    "Jornalismo",
    "Letras",
    "Logística",
    "Marketing",
    "Medicina Veterinária",
    "Nutrição",
    "Odontologia",
    "Pedagogia",
    "Psicologia",
    "Publicidade e Propaganda",
    "Radiologia",
    "Relações Internacionais",
    "Relações Públicas",
    "Serviço Social",
    "Sistemas de Informação",
    "Teologia",
    "Turismo",
  ];

  const handleSelectCourse = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectCourse(event.target.value);
  };

  useEffect(() => {
    if (userVerify) {
      navigate("/", { state: user });
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [userVerify, navigate, user]);

  const saveUser = useCallback(() => {
    axios
      .post("http://localhost:7010/users", {
        nameUser: name,
        email: email,
        password: password,
        id: id,
        role: selectCategory,
        course: selectCourse,
        photoUser: photo,
      })
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        return (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">Erro ao cadastrar</Alert>
          </Stack>
        );
      });
  }, [
    name,
    email,
    password,
    id,
    selectCategory,
    selectCourse,
    photo,
    navigate,
  ]);

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
          <div style={{ width: "300px", height: "470px" }}>
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
                placeholder="qual o seu nome?"
                style={{ marginBottom: "20px" }}
                onChange={(event) => setName(event.target.value)}
              />
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
              <div
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                <p
                  style={{
                    color: "black",
                    margin: "0px",
                  }}
                >
                  Selecione sua Ocupação:
                </p>
                <select
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                  }}
                  onChange={(event) => setSelectCategory(event.target.value)}
                >
                  <option value="Professor">Professor</option>
                  <option value="Aluno">Aluno</option>
                </select>
              </div>
              <div style={{ width: "100%", marginBottom: "20px" }}>
                <p style={{ color: "black", margin: "0px" }}>
                  Qual o seu curso?
                </p>
                <select
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                  }}
                  onChange={handleSelectCourse}
                >
                  {courser.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                placeholder="Foto de perfil(url)"
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
            <div>
              <ButtonLogin
                onClick={() => saveUser()}
                style={{ marginTop: "10px", border: "2px solid #164285" }}
              >
                Cadastrar
              </ButtonLogin>
              <ButtonLogin
                onClick={() => navigate("/login")}
                style={{ marginTop: "10px", border: "2px solid #72bf44" }}
              >
                Voltar ao Login
              </ButtonLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
