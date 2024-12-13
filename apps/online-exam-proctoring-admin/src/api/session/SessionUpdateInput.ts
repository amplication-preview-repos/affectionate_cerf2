import { ProctoringUpdateManyWithoutSessionsInput } from "./ProctoringUpdateManyWithoutSessionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  endTime?: Date | null;
  proctorings?: ProctoringUpdateManyWithoutSessionsInput;
  startTime?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
