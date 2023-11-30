import { Button, Modal, TextareaAutosize } from "@material-ui/core";
import { useEffect, useState } from "react";
import UploadButton from "./UploadButton/UploadButton";
import { nanoid } from "nanoid";
import axios from "axios";

interface IPost {
  nameUser: string;
  date: string;
  role: string;
  Course: string;
  content: string;
  photo: string;
  likes: number;
  id: number;
  image: string;
}

interface INewPublic {
  setGet: React.Dispatch<React.SetStateAction<boolean>>;
}
export const NewPublic: React.FC<INewPublic> = ({ setGet }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState<string>("");
  const [selectCourse, setSelectCourse] = useState<string>("Administração");
  const [selectCategory, setSelectCategory] = useState<string>("Professor");
  const [photoUser, setPhotoUser] = useState<string>("");
  const [contentPost, setContentPost] = useState<string>("");
  const [name, setName] = useState<string>("");
  const id = nanoid();

  const handleModalClose = () => {
    setGet(true);
    setModalOpen(false);
  };

  const handleOpen = () => {
    // setModalOpen(true);
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSeBKnr58eBLY8qkGbIqWSk8oz8C8vmh8s6ErVfEE0YHiru0ig/viewform";
  };

  useEffect(() => {
    localStorage.getItem("user") &&
      setName(JSON.parse(localStorage.getItem("user") || "{}").nameUser);
    setSelectCategory(JSON.parse(localStorage.getItem("user") || "{}").role);
    setSelectCourse(JSON.parse(localStorage.getItem("user") || "{}").Course);
    setPhotoUser(JSON.parse(localStorage.getItem("user") || "{}").photoUser);
  }, []);

  const SavePost = async () => {
    axios
      .post<IPost>(
        "https://mocki.io/v1/b83210eb-ca74-40fe-bfd8-6a321ae63e92/posts",
        {
          nameUser: name,
          date: "2020-01-01",
          role: selectCategory,
          Course: selectCourse,
          content: contentPost,
          photo: photoUser,
          likes: 0,
          id: id,
          image: image === "" ? "" : image,
        }
      )
      .then(() => handleModalClose())
      .catch((e) => console.log(e));
  };

  // const courser = [
  //   "Administração",
  //   "Agronomia",
  //   "Arquitetura e Urbanismo",
  //   "Artes Visuais",
  //   "Biomedicina",
  //   "Ciência da Computação",
  //   "Ciências Biológicas",
  //   "Ciências Contábeis",
  //   "Ciências Econômicas",
  //   "Design",
  //   "Direito",
  //   "Educação Física",
  //   "Enfermagem",
  //   "Engenharia Ambiental e Sanitária",
  //   "Engenharia Civil",
  //   "Engenharia de Produção",
  //   "Engenharia Elétrica",
  //   "Engenharia Mecânica",
  //   "Engenharia Química",
  //   "Estética e Cosmética",
  //   "Farmácia",
  //   "Fisioterapia",
  //   "Fonoaudiologia",
  //   "Gastronomia",
  //   "Gestão Comercial",
  //   "Gestão de Recursos Humanos",
  //   "Gestão Financeira",
  //   "Jornalismo",
  //   "Letras",
  //   "Logística",
  //   "Marketing",
  //   "Medicina Veterinária",
  //   "Nutrição",
  //   "Odontologia",
  //   "Pedagogia",
  //   "Psicologia",
  //   "Publicidade e Propaganda",
  //   "Radiologia",
  //   "Relações Internacionais",
  //   "Relações Públicas",
  //   "Serviço Social",
  //   "Sistemas de Informação",
  //   "Teologia",
  //   "Turismo",
  // ];

  // const handleSelectCourse = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectCourse(event.target.value);
  // };

  const handleSearch = (event: string) => {
    localStorage.setItem("search", event);
  };

  const search = localStorage.getItem("search");

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "white",
            width: "80%",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "start",
            padding: "20px",
            marginBottom: "10px",
            marginTop: "10px",
            border: "2px solid #72bf44",
            gap: "1rem",
          }}
        >
          <div
            onClick={handleOpen}
            style={{
              backgroundColor: "#72bf44",
              width: "3rem",
              height: "3rem",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            +
          </div>
          <input
            placeholder="Deseja procurar um depoimento semelhante?"
            style={{ width: "100%" }}
            defaultValue={search ? search : ""}
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>
      </div>
      <Modal
        open={ModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              color: "white",
              backgroundColor: "#ffff",
              padding: "20px",
              minWidth: "500px",
              borderRadius: "10px",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <div
              style={{
                borderBottom: "2px solid #72bf44",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p style={{ color: "black", marginTop: "12px" }}>Nova Pergunta</p>
              <Button style={{ color: "black" }} onClick={handleModalClose}>
                X
              </Button>
            </div>
            {/* <div style={{ width: "100%", marginBottom: "20px" }}>
              <p style={{ color: "black", margin: "0px" }}>Qual o seu curso?</p>
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
            </div> */}

            <TextareaAutosize
              placeholder="O que deseja perguntar hoje?"
              style={{
                width: "100%",
                height: "100px",
                border: "none",
                outline: "none",
              }}
              onChange={(event) => setContentPost(event.target.value)}
            />
            <div
              style={{
                width: "100%",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <UploadButton setImage={setImage} />
            </div>

            <Button
              style={{
                width: "100%",
                backgroundColor: "transparent",
                color: "black",
                border: "2px solid #72bf44",
              }}
              onClick={() => SavePost()}
            >
              Publicar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
