/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDisclosure } from "@chakra-ui/react";
import Card from "./assets/card/Card";
import Header from "./assets/header/Header";
import AlertPop from "./assets/card/alert/AlertPop";
import { status } from "./assets/card/alert/AlertPop";
import { useRef, useState } from "react";


enum anos {
  "jan",
  "fev",
  "marc",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez"
}

function App() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });
  const {
    isOpen: isVoid,
    onOpen: onVoid,
    onClose: closeVoid,
  } = useDisclosure({ defaultIsOpen: false });

  const [insights, setInsights] = useState([]);
  const inp = useRef();

  const clickAlert = () => {
    const text : string = inp.current.value;
    const data = new Date()
    const dia = data.getUTCDate()
    const mes = data.getMonth()
    const ano = data.getFullYear()
    const colors = [
      "#D00000",
      "#FF499E",
      "#3F88C5",
      "#00C49A",
      "#FFBA08",
      "#9747FF",
    ];
    const index = Math.round(Math.random() * (colors.length - 0 + 1));
    const bg = colors[index];
    

    if (text) {
      const newCard = <Card key={insights.length} text={`${text}`} data={`${dia} / ${anos[mes]} / ${ano}`} color={bg} list={insights}/>;
      setInsights([...insights, newCard]); 
      onVoid();
      onOpen();
      setTimeout(onClose, 2500);
    } else {
      closeVoid();
      onOpen();
      setTimeout(onClose, 2500);
    }
  };

  return (
    <div className="body">
      {isVisible && (
        <AlertPop
          visible={isVisible}
          type={isVoid ? status.success : status.warning}
          text={
            isVoid
              ? "seu insight foi salvo ! ❤️💙"
              : "escreva alguma coisa no seu insight 😠🦦"
          } 
          color={isVoid ? 'green' : 'brown' }
        />
      )}
      <header>
        <Header click={clickAlert} reference={inp}></Header>
      </header>
      <main>
        <fieldset>
          <div>
            <legend>
              <h1>seus insights :</h1>
            </legend>
            <div>
              {insights.map((item) => {
                return <>{item}</>;
              })}
            </div>
          </div>
        </fieldset>
      </main>
    </div>
  );
}

export default App;
