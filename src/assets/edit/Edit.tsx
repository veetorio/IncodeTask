import { Editable, EditablePreview, EditableTextarea } from "@chakra-ui/react";

function Edit(props : {value : string , disable : boolean}) {
    
  return (
    <Editable defaultValue={props.value} isDisabled={props.disable}>
      <EditablePreview />
      <EditableTextarea />
    </Editable>
  );
}

export default Edit;