import { Button, Input, Modal, TextareaAutosize } from "@material-ui/core";
import { useState } from "react";
import UploadButton from "./UploadButton/UploadButton";

export const NewPublic = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleOpen = () => {
    setModalOpen(true);
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
            <TextareaAutosize
              placeholder="O que deseja compartilhar hoje?"
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                marginTop: "10px",
              }}
            />
            <UploadButton />
            <Button
              style={{
                width: "100%",
                backgroundColor: "white",
                marginTop: "10px",
              }}
            >
              Publicar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
