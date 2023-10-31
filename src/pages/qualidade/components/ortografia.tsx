import { HiArrowLeft } from "react-icons/hi";
import { NavBar } from "../../../components/NavBar/Navbar";
import { useNavigate } from "react-router-dom";

export const Orthography = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div style={{ padding: "2rem" }}>
        <div className="arrow" onClick={() => navigate("/qualidade")}>
          <HiArrowLeft />
        </div>
        <h1 style={{ marginBottom: "2rem" }}>
          ORTOGRAFIA E SUA IMPORTANCIA NO MEIO EMPRESARIAL/ UNIVERSITARIO
        </h1>
        A importância da ortografia correta na escrita é indiscutível, pois
        afeta diretamente a clareza da comunicação, a credibilidade do autor e a
        compreensão global. A ortografia, que envolve a maneira como as palavras
        são escritas e acentuadas, desempenha um papel fundamental em diversos
        aspectos da vida, seja na esfera profissional, acadêmica ou pessoal.
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "auto",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src="https://static.todamateria.com.br/upload/or/to/ortografia-regras-ortograficas-exercicios-og.jpg"
            style={{
              width: "60%",
              height: "15rem",
            }}
          />
        </div>
        <p>
          Em primeiro lugar, a ortografia correta é essencial para garantir a
          clareza na comunicação escrita. Quando as palavras são escritas de
          forma adequada, a mensagem do autor é transmitida sem ambiguidades.
          Isso é particularmente importante em documentos profissionais, como
          relatórios, e-mails de negócios, currículos e comunicações oficiais. A
          ortografia correta ajuda a evitar mal-entendidos e interpretações
          equivocadas, o que é crucial em situações em que a precisão é
          necessária.
        </p>
        <p>Acentuação gráfica:</p>
        <p>
          Aprenda as regras de acentuação para acentos agudos (´), circunflexos
          (^) e graves (`) em palavras paroxítonas, oxítonas e proparoxítonas.
        </p>
        <p>Uso do cedilha (ç):</p>
        <p>
          Utilize o "ç" antes de "a," "o," e "u" para indicar que o "c" deve ser
          pronunciado como "ss."
        </p>
        <p>Hífen:</p>
        <p>
          Saiba quando usar o hífen em palavras compostas, com prefixos e em
          situações específicas, de acordo com as regras vigentes.
        </p>
        <p>Uso do trema (¨):</p>
        <p>
          Embora pouco comum em português atualmente, o trema é usado para
          indicar que duas vogais adjacentes devem ser pronunciadas
          separadamente em algumas palavras.
        </p>
        <p>Acentuação de monossílabos:</p>
        <p>
          Aprenda quando acentuar monossílabos tônicos (com acento) que são
          homógrafos de outras palavras.
        </p>
        <p>Uso de letras maiúsculas:</p>
        <p>
          Utilize letras maiúsculas no início de frases, nomes próprios, títulos
          de obras e em situações específicas, conforme as convenções de
          maiúsculas e minúsculas.
        </p>
        <p>Uso de "S" e "SS":</p>
        <p>
          Utilize "S" no início das palavras e entre vogais, enquanto "SS" é
          usado em palavras específicas.
        </p>
        <p>Uso de "C" e "QU":</p>
        <p>"C" é usado antes de "e" e "i," enquanto "QU" forma o som /kw/.</p>
      </div>
    </>
  );
};
