import { ProctoringCreateNestedManyWithoutSessionsInput } from "./ProctoringCreateNestedManyWithoutSessionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  endTime?: Date | null;
  proctorings?: ProctoringCreateNestedManyWithoutSessionsInput;
  startTime?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
