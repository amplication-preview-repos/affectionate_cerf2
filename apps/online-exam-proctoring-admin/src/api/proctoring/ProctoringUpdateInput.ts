import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProctoringUpdateInput = {
  notes?: string | null;
  session?: SessionWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
