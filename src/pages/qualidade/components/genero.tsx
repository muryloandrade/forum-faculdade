import { useNavigate } from "react-router-dom";
import { NavBar } from "../../../components/NavBar/Navbar";
import { HiArrowLeft } from "react-icons/hi";

export const Genero = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div style={{ padding: "2rem" }}>
        <div className="arrow" onClick={() => navigate("/qualidade")}>
          <HiArrowLeft />
        </div>
        <h1>IGUALDADE DE GÊNERO DA EDUCAÇÃO</h1>
        <h2>Igualdade de Gênero na Educação</h2>
        <p>
          A igualdade de gênero na educação é um princípio fundamental que busca
          eliminar as disparidades e discriminações baseadas no gênero no
          sistema educacional. Isso envolve garantir que meninas e meninos,
          mulheres e homens tenham igualdade de acesso, oportunidades e
          tratamento em todas as fases da educação, desde a educação infantil
          até o ensino superior.
        </p>
        <p>
          Existem várias razões pelas quais a igualdade de gênero na educação é
          essencial:
        </p>
        <p>
          1. <strong>Direitos Humanos:</strong> A igualdade de gênero na
          educação é um direito humano fundamental. Todas as pessoas,
          independentemente de seu gênero, têm o direito de receber uma educação
          de qualidade.
        </p>
        <p>
          2. <strong>Desenvolvimento Social e Econômico:</strong> A educação é
          um catalisador para o desenvolvimento social e econômico. Quando
          mulheres e meninas têm acesso à educação de qualidade, elas estão mais
          bem preparadas para participar ativamente na sociedade e no mercado de
          trabalho.
        </p>
        <p>
          3. <strong>Redução das Desigualdades:</strong> A educação igualitária
          reduz as disparidades de gênero em várias áreas, como participação
          política, empregabilidade e empoderamento. Isso contribui para uma
          sociedade mais justa e equitativa.
        </p>
        <p>
          4. <strong>Empoderamento das Mulheres:</strong> Através da educação,
          as mulheres podem adquirir habilidades, conhecimento e confiança
          necessários para tomar decisões informadas sobre suas vidas e
          influenciar positivamente suas comunidades.
        </p>
        <p>
          5. <strong>Quebra de Estereótipos:</strong> Promover a igualdade de
          gênero na educação ajuda a desconstruir estereótipos de gênero
          prejudiciais e promove a ideia de que ambos os sexos são igualmente
          capazes de atingir seus objetivos.
        </p>
        <p>
          6. <strong>Prevenção da Violência de Gênero:</strong> Uma educação que
          promova a igualdade de gênero pode contribuir para a prevenção da
          violência de gênero, ao ensinar o respeito mútuo e a não tolerância à
          discriminação.
        </p>
        <p>
          Para alcançar a igualdade de gênero na educação, é importante
          implementar políticas e práticas que eliminem barreiras de acesso,
          promovam a inclusão e combatam o sexismo no ambiente escolar. Além
          disso, é essencial envolver a sociedade como um todo na promoção dessa
          causa, pois a igualdade de gênero na educação é benéfica para todos,
          independentemente do gênero.
        </p>
      </div>
    </>
  );
};
