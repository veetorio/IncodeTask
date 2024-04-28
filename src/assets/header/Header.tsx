import { Button, Input } from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import { PiLightbulb } from "react-icons/pi";
import { useState } from "react";


function Header(props : { click?: MouseEventHandler<HTMLButtonElement> | undefined , reference? : any }) {
  const [ text , setText ] = useState('')

  return (
    <>
      <div className="content-logo">
        <PiLightbulb color="white" />
        <h1>Insights</h1>
      </div>
      <div className="content-form">
        <fieldset>
          <legend>descreva seu insight :</legend>
          <form>
            <Input
              width={"100%"}
              ml={"5px"}
              bg={"#262626"}
              border={"4px solid #696969"}
              _hover={{ border: "1px solid #FFD131" }}
              transition={".5s"}
              ref={props.reference}
              onChange={(e) => { setText(e.target.value);}}
              value={text}
            />
            <Button
              bg={"#FFD131"}
              ml={"20px"}
              _hover={{ bg: "#b29631", scale: 0.5 }}
              onClick={props.click}
            >
              +
            </Button>
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default Header;