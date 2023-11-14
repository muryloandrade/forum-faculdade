import { Button, Modal, TextareaAutosize } from "@material-ui/core";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import { Information, Profile, ProfilePhoto } from "../Publicação/publi-styled";

interface INewPublic {
  coments: boolean;
  setComents: React.Dispatch<React.SetStateAction<boolean>>;
  idpost: string;
}

interface IComent {
  idPost: string;
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

export const Coments: React.FC<INewPublic> = ({
  coments,
  setComents,
  idpost,
}) => {
  const [ModalOpen, setModalOpen] = useState(true);
  const [comenta, setComenta] = useState<IComent[] | []>([]);
  const [contentPost, setContentPost] = useState<string>("");

  const handleModalClose = () => {
    setComents(!coments);
    setModalOpen(false);
  };

  console.log(comenta);

  useEffect(() => {
    axios
      .get(`https://mocki.io/v1/b83210eb-ca74-40fe-bfd8-6a321ae63e92`)
      .then((res) => {
        const respondes = res.data.comentsPosts;
        setComenta(
          respondes.find((responde: IComent) => responde.idPost === idpost)
        );
      })
      .catch((res) => {
        console.log(res);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const id = nanoid();
  const handleComent = async () => {
    axios
      .post<IComent>(
        "https://mocki.io/v1/b83210eb-ca74-40fe-bfd8-6a321ae63e92/comentsPosts",
        {
          nameUser: JSON.parse(localStorage.getItem("user") || "{}").nameUser,
          date: "2020-01-01",
          role: JSON.parse(localStorage.getItem("user") || "{}").role,
          Course: JSON.parse(localStorage.getItem("user") || "{}").Course,
          content: contentPost,
          photo: JSON.parse(localStorage.getItem("user") || "{}").photoUser,
          likes: 0,
          idPost: idpost,
          id: id,
          image: "",
        }
      )
      .then(() => {
        console.log("Comentário adicionado com sucesso!");
        setContentPost("");
        axios
          .get(`https://mocki.io/v1/b83210eb-ca74-40fe-bfd8-6a321ae63e92`)
          .then((res) => {
            const respondes = res.data.comentsPosts;
            setComenta(
              respondes.find((responde: IComent) => responde.idPost === idpost)
            );
          })
          .catch((res) => {
            console.log(res);
          });
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
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
              minWidth: "1000px",
              borderRadius: "10px",
              width: "fit-content",
              height: "800px",
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
              <p
                style={{
                  marginTop: "12px",
                  color: "black",
                }}
              >
                Comentários
              </p>
              <Button style={{ color: "black" }} onClick={handleModalClose}>
                X
              </Button>
            </div>
            <div
              style={{
                height: "70%",
                color: "black",
              }}
            >
              {comenta === undefined || comenta.length < 1 ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  NÃO TEM COMENTÁRIOS
                </div>
              ) : (
                comenta.map((user) => (
                  <div key={user.id} style={{ overflow: "auto" }}>
                    <Profile>
                      <ProfilePhoto
                        src={user.photo}
                        className="rounded-circle m-1"
                        alt="Profile"
                      />
                      <Information className="">
                        <h2>{user.nameUser}</h2>
                        <h1>
                          {user.role} de {user.Course}
                        </h1>
                      </Information>
                    </Profile>
                    <div>
                      <p className="lh-1 mt-3">{user.content}</p>
                      <div style={{ width: "100%" }}>
                        {user.image !== "" ? (
                          <img
                            src={user.image}
                            style={{ maxWidth: "80%" }}
                            alt="Post"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div>
              <TextareaAutosize
                placeholder="O que deseja comentar?"
                style={{
                  width: "100%",
                  height: "100px",
                  border: "1px solid #72bf44",
                  outline: "none",
                }}
                value={contentPost}
                onChange={(event) => setContentPost(event.target.value)}
              />

              <Button
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  color: "black",
                  border: "2px solid #72bf44",
                }}
                onClick={() => handleComent()}
              >
                Comentar
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
