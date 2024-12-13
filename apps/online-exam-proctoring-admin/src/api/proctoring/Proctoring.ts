import { Session } from "../session/Session";
import { User } from "../user/User";

export type Proctoring = {
  createdAt: Date;
  id: string;
  notes: string | null;
  session?: Session | null;
  updatedAt: Date;
  user?: User | null;
};
