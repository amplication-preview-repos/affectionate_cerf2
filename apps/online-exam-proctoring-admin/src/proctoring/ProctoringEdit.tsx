import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SessionTitle } from "../session/SessionTitle";
import { UserTitle } from "../user/UserTitle";

export const ProctoringEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="notes" multiline source="notes" />
        <ReferenceInput source="session.id" reference="Session" label="Session">
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
