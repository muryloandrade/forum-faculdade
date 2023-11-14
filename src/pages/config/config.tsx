import { ReactElement, useState } from "react";
import { NavBar } from "../../components/NavBar/Navbar";
import {
  MdOutlineAlternateEmail,
  MdOutlineDriveFileRenameOutline,
} from "react-icons/md";

export const Config = (): ReactElement => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [ocupation, setOcupation] = useState("");
  const [course, setCourse] = useState("");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const blockSave = user.nameUser === name || !name ? true : false;

  console.log(email, name, ocupation, course);

  const buttonStyle = {
    marginTop: "10px",
    backgroundColor: blockSave ? "gray" : "#164285",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    cursor: blockSave ? "not-allowed" : "pointer",
  };
  return (
    <>
      <NavBar />
      <div style={{ padding: "2rem" }}>
        <div style={{ gap: "2rem" }}>
          <h1>Profile</h1>
          <img
            style={{ borderRadius: "50%", width: "10rem" }}
            src={user.photoUser}
            alt="Avatar"
          />
          <div
            style={{
              gap: "4px",
              width: "10rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MdOutlineDriveFileRenameOutline />{" "}
            <input
              type="text"
              name="nome"
              defaultValue={user.nameUser}
              onChange={(e) => setName(e.target.value)}
            />
            <MdOutlineAlternateEmail />{" "}
            <input
              type="text"
              name="email"
              defaultValue={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            curso:{" "}
            <input
              type="text"
              name="curso"
              defaultValue={user.Course}
              onChange={(e) => setCourse(e.target.value)}
            />
            ocupação:{" "}
            <input
              type="text"
              name="ocupação"
              defaultValue={user.role}
              onChange={(e) => setOcupation(e.target.value)}
            />
          </div>

          <button style={buttonStyle} disabled={blockSave}>
            Salvar
          </button>
        </div>
      </div>
    </>
  );
};
