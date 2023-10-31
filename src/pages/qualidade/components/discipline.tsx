import { useNavigate } from "react-router-dom";
import { NavBar } from "../../../components/NavBar/Navbar";
import { HiArrowLeft } from "react-icons/hi";
import "./arrow.css";

export const Discipline = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div style={{ padding: "2rem" }}>
        <div className="arrow" onClick={() => navigate("/qualidade")}>
          <HiArrowLeft />
        </div>
        <h1>O estudo intercalado</h1> envolve a prática de alternar entre
        diferentes matérias de forma aleatória. Mudar de disciplina e tópico
        ajuda a manter a concentração no conteúdo, o que, por sua vez, permite
        que você estude por períodos mais longos. Quando alguém passa várias
        horas seguidas focado em um único tema, é comum que a concentração
        diminua, já que o cérebro tende a se acostumar com o assunto. Portanto,
        alternar entre matérias após um certo período de tempo é uma estratégia
        eficaz para renovar o interesse e a motivação para estudar, estimulando
        o pensamento de maneira diversificada.
        <h1 style={{ marginTop: "2em" }}>MAPA MENTAL</h1>A criação de mapas
        mentais é um método eficaz para condensar as informações-chave de um
        determinado conteúdo. Essa técnica envolve a construção de um diagrama
        composto por palavras, ícones e setas, o que facilita a visualização
        lógica do material. Dessa forma, os mapas mentais funcionam como resumos
        práticos dos conceitos estudados. Ao desenvolver um mapa mental, é
        crucial explorar a criatividade, utilizando diversas formas, cores e
        destaques. É essencial que o conteúdo seja atrativo e organizado para
        que produza o impacto desejado.
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "auto",
          }}
        >
          <img
            style={{ marginTop: "2em" }}
            src="https://static.wixstatic.com/media/fbf895_7b1ee4175bb141afa66df6e809044aa8~mv2_d_3005_2072_s_2.jpg/v1/fill/w_640,h_442,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fbf895_7b1ee4175bb141afa66df6e809044aa8~mv2_d_3005_2072_s_2.jpg"
          />
        </div>
        <h1 style={{ marginTop: "2em" }}>RELEITURA</h1>A prática da releitura é
        uma técnica simples, muitas vezes mais eficaz do que simplesmente
        destacar ou sublinhar partes específicas de um material. Essa abordagem
        se revela uma maneira interessante de aprimorar a retenção do
        conhecimento, uma vez que permite ao estudante retornar ao conteúdo com
        uma base de entendimento anterior, tornando mais fácil a formulação de
        ideias complementares.
        <h1 style={{ marginTop: "2em" }}>FICHAMENTO</h1>
        Os fichamentos, que são resumos esquemáticos de cada conteúdo,
        representam um método eficaz de estudo. Por meio deles, é viável
        compilar as informações mais significativas de um livro ou tópico, por
        exemplo. Essa abordagem permite identificar de forma rápida as áreas e
        disciplinas que requerem reforço, sem a necessidade de dedicar tempo a
        uma leitura completa dos materiais. Isso agiliza o processo de estudo e
        assegura que as revisões sejam verdadeiramente eficazes.
        <h1 style={{ marginTop: "2em" }}>Testes práticos</h1>A realização de
        testes práticos relacionados ao material estudado é outra estratégia de
        aprendizagem valiosa. Esse método envolve a simulação de uma avaliação,
        o que também contribui para a preparação de concursos, vestibulares, ou
        outros exames. A eficácia desse método aumenta à medida que se realizam
        o maior número possível de exercícios, aprimorando assim a assimilação
        do conteúdo, e essa prática pode ser facilitada com o auxílio de
        recursos online, por exemplo. Ao optar por essa abordagem, é fundamental
        revisar as questões que geram mais dúvidas e aquelas que foram
        respondidas incorretamente. A mera conclusão das questões não é
        suficiente; é crucial compreender o conteúdo em questão. Essa análise
        possibilita a verificação do entendimento real sobre um tópico
        específico.
        <h1 style={{ marginTop: "2em" }}>PERGUNTAS E RESPOSTAS</h1>
        Outra técnica fundamental envolve o uso de perguntas e respostas como
        meio de revisar o material estudado. A elaboração de perguntas promove a
        aprendizagem, uma vez que demanda um pensamento crítico para criar
        questionamentos significativos. Além disso, responder às perguntas com
        suas próprias palavras facilita a compreensão, o domínio e a memorização
        do conteúdo. No processo de formular perguntas e buscar as respostas, é
        comum identificar áreas em que você tem um bom entendimento e outras que
        apresentam desafios. Dessa forma, esse método ajuda a organizar e
        planejar seu estudo, priorizando disciplinas e tópicos nos quais você
        precisa melhorar seu desempenho.
        <h1 style={{ marginTop: "2em" }}>AUTOEXPLICAÇÃO</h1>A técnica da
        autoexplicação é altamente eficaz, especialmente quando se lida com
        conteúdos que exigem uma compreensão mais profunda, ou seja, aqueles que
        não são puramente exatos. Ela envolve a leitura de um determinado
        assunto e a explicação desse assunto com suas próprias palavras. Você
        pode realizar esse processo olhando-se no espelho, explicando para si
        mesmo ou até mesmo para outra pessoa. O momento ideal para empregar esse
        método é logo após o estudo, quando o conteúdo ainda está fresco na
        memória. Além de aprimorar a compreensão do material, a autoexplicação
        também contribui para o desenvolvimento das habilidades de comunicação e
        oratória.
        <h1 style={{ marginTop: "2em" }}>PRATICA DISTRIBUIDA</h1>A prática
        distribuída envolve a divisão dos períodos de estudo ao longo do dia. Em
        vez de concentrar-se em uma única matéria por 3 horas consecutivas, por
        exemplo, você pode distribuir seu estudo, dedicando 1 hora de manhã, 1
        hora à tarde e outra à noite para cobrir as matérias pendentes. Essa
        estratégia promove uma maior produtividade, pois permite intervalos para
        descanso mental e físico. Além disso, a técnica é útil para aqueles que
        não têm disponibilidade para longos períodos de estudo, mas podem
        concentrar-se em breves momentos ao longo do dia.
        <h1 style={{ marginTop: "2em" }}>POMODORO</h1>
        Se você já experimentou a sensação de perder a capacidade de
        concentração após um período prolongado de estudo sobre o mesmo
        conteúdo, a técnica Pomodoro pode ser uma alternativa eficaz. Essa
        abordagem se baseia na ideia de que, após um certo período, nossa
        capacidade de foco e produtividade começa a diminuir quando nos
        dedicamos a uma tarefa por um longo período. Essa premissa, que possui
        respaldo científico, sugere que a melhor maneira de manter a
        concentração nas atividades é incluir breves intervalos. De acordo com
        Francesco Cirillo, o criador da técnica, o descanso ideal é de 5 minutos
        após 20 a 30 minutos de concentração total na atividade.
        <h1 style={{ marginTop: "2em" }}>USO DE AUDIOS</h1>O uso de áudios é
        outro recurso valioso para melhorar seus resultados de estudo,
        especialmente se você é um aprendiz auditivo, que absorve informações
        com mais eficácia através da audição. Atualmente, existe uma abundância
        de podcasts e outros tipos de aulas em formato de áudio que permitem que
        você estude em qualquer lugar e a qualquer momento. Além disso, a
        capacidade de ouvir áudios enquanto realiza tarefas simples torna essa
        técnica ainda mais prática. No entanto, é benéfico combinar essa
        abordagem com outras estratégias mencionadas anteriormente para
        maximizar o aprendizado.
        <h1 style={{ marginTop: "2em" }}>Estudo mnemônico</h1>O estudo
        mnemônico, embora seu nome seja em grande parte desconhecido pelos
        estudantes, é uma técnica que muitos deles utilizam de forma intuitiva.
        Em termos simples, consiste em empregar siglas para facilitar a
        lembrança de aspectos específicos do conteúdo. Por exemplo, para
        recordar a sequência de palavras "competência, atitude e habilidade,"
        você pode criar uma sigla como "CAH," que representa o conjunto completo
        do conteúdo.
        <h1 style={{ marginTop: "2em" }}>RESUMOS</h1>
        Os resumos são uma das técnicas de estudo mais eficazes para consolidar
        o conteúdo e alcançar melhores resultados em avaliações. Essa abordagem
        envolve a síntese de um tópico da matéria em formato de texto, no qual
        você apresenta os aspectos mais relevantes de forma concisa e coerente.
        Para criar um resumo de qualidade, é aconselhável usar suas anotações e
        mapas mentais feitos durante a aula como ponto de partida. Também é útil
        realçar palavras-chave e termos essenciais para a compreensão das
        informações. Dessa maneira, o material estará pronto para ser revisado
        quando necessário.
        <h1 style={{ marginTop: "2em" }}>FLASHCARDS</h1>
        Os flashcards são recursos alternativos que podem ser muito úteis para
        aprimorar a capacidade de memorização em áreas específicas de estudo.
        Essa estratégia funciona da seguinte maneira: o estudante cria pequenos
        cartões, frequentemente em papel especial, para testar sua memória. De
        um lado do cartão, é possível formular uma pergunta e, do outro lado,
        escrever a resposta correspondente. Esses cartões podem ter diferentes
        formatos, adequados ao tópico de estudo, e podem conter definições,
        conceitos, palavras-chave e outros aspectos do conteúdo que precisa ser
        memorizado. A vantagem dessa técnica é que ela pode ser aplicada a
        qualquer tipo de conteúdo e disciplina, sendo fácil de criar e eficaz
        para o processo de memorização.
      </div>
    </>
  );
};
