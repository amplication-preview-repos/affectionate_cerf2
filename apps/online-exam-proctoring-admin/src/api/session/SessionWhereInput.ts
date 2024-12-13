import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProctoringListRelationFilter } from "../proctoring/ProctoringListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  proctorings?: ProctoringListRelationFilter;
  startTime?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
