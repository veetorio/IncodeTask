/* eslint-disable react-refresh/only-export-components */
import { Alert, AlertIcon, AlertDescription,Slide ,Box } from "@chakra-ui/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export enum status {
  "success" = "success",
  "warning" = "warning",
  "info" = "info",
  "error" = "error",
  "void" = 0
}
function AlertPop(props : { type? : status , visible? : boolean , text? : string , color? : string} ){

    return (
        <Slide in={props.visible || true}>
        <Box mt={'10px'} ml={'10px'}>
          <Alert status={props.type || 'success'} width={"30%"} borderRadius={"10px"} color={props.color}>
            <AlertIcon />
            <AlertDescription>
              {props.text}
            </AlertDescription>
          </Alert>
        </Box>
      </Slide>
    )
}

export default AlertPop;