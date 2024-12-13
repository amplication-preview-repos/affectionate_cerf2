import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SessionTitle } from "../session/SessionTitle";
import { UserTitle } from "../user/UserTitle";

export const ProctoringCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="notes" multiline source="notes" />
        <ReferenceInput source="session.id" reference="Session" label="Session">
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
