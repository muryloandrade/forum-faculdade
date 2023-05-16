import { Button, Input, Modal, TextareaAutosize } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import UploadButton from "./UploadButton/UploadButton";
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
}

export const NewPublic = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  // const [file, setFile] = useState<File | undefined>(undefined);
  const [selectCourse, setSelectCourse] = useState<string>("Administração");
  const [selectCategory, setSelectCategory] = useState<string>("Professor");
  const [contentPost, setContentPost] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const SavePost = async () => {
    axios
      .post<IPost>("http://localhost:7010/posts", {
        nameUser: name,
        date: "2020-01-01",
        role: selectCategory,
        Course: selectCourse,
        content: contentPost,
        photo: "https://picsum.photos/200/300/?random",
        likes: 0,
        id: 6,
      })
      .then((e) => console.log(e.data))
      .catch((e) => console.log(e));
  };

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

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={handleOpen}
          style={{
            backgroundColor: "#0E4159",
            color: "white",
            width: "80%",
            borderRadius: "10px",
            padding: "10px",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          Clique aqui para fazer uma publicação
        </Button>
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
              backgroundColor: "#0E4159",
              padding: "20px",
              borderRadius: "10px",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Comece uma nova Publicação</p>
              <Button style={{ color: "white" }}>X</Button>
            </div>
            <Input
              placeholder="qual o seu nome?"
              onChange={(event) => setName(event.target.value)}
            />
            <p
              style={{
                marginTop: "10px",
              }}
            >
              Selecione sua categoria:
            </p>
            <select
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                marginBottom: "10px",
              }}
              onChange={(event) => setSelectCategory(event.target.value)}
            >
              <option value="Professor">Professor</option>
              <option value="Aluno">Aluno</option>
            </select>
            <p>Qual o seu curso?</p>
            <select
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                marginBottom: "10px",
              }}
              onChange={handleSelectCourse}
            >
              {courser.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <TextareaAutosize
              placeholder="O que deseja compartilhar hoje?"
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                marginTop: "10px",
              }}
              onChange={(event) => setContentPost(event.target.value)}
            />
            <UploadButton />
            <Button
              style={{
                width: "100%",
                backgroundColor: "white",
                marginTop: "10px",
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
