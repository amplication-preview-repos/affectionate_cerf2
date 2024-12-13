import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProctoringWhereInput = {
  id?: StringFilter;
  notes?: StringNullableFilter;
  session?: SessionWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
