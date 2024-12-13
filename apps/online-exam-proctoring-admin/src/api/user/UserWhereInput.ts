import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProctoringListRelationFilter } from "../proctoring/ProctoringListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  proctorings?: ProctoringListRelationFilter;
  role?: "Option1";
  sessions?: SessionListRelationFilter;
  username?: StringFilter;
};
