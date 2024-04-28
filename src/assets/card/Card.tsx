/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  background,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
  list,
  useEditableControls,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import {
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Edit from "../edit/Edit";
import { useRef, useState } from "react";

function Card(props: {
  text: string;
  data?: string;
  color: string;
  list: string[];
}) {
  const styles = { background: `${props.color || "red"}` };
  const openModal = () => {
    onOpen();
  };
  const edit = useRef()
  const ableEdit = () => {
    isDisable ? onDisable() : onAble()
    alert(edit.current?.textContent)
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen : isDisable, onOpen : onAble, onClose : onDisable } = useDisclosure();
  

  return (
    <>
      {isOpen && (
        <>
          <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
            <ModalContent bg={props.color || "red"} color={"#fff"}>
              <ModalCloseButton fontSize={"24px"} />
              <ModalBody
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Text fontSize={"32px"}>
                  <Edit value={props.text} disable={isDisable} reference={edit}></Edit>
                </Text>
                <Text fontSize={"12px"}>{props.data}</Text>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="transparent"
                  mr={"auto"}
                  mb={"10px"}
                  fontSize={"44px"}
                  onClick={ableEdit}
                >
                  <FaRegEdit />
                </Button>
                <Button
                  colorScheme="transparent"
                  mb={"auto"}
                  fontSize={"44px"}
                  color={"white"}
                  onClick={() => {
                    onAble()
                  }}
                >
                  <RiDeleteBin6Line />
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
      <div className="card-insight" style={styles} onClick={openModal}>
        <div id="text-conteiner">
          <p>{props.text}</p>
        </div>
        <div id="data-conteiner">{props.data}</div>
      </div>
    </>
  );
}

export default Card;
