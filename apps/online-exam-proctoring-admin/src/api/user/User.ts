import { Proctoring } from "../proctoring/Proctoring";
import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  proctorings?: Array<Proctoring>;
  role?: "Option1" | null;
  roles: JsonValue;
  sessions?: Array<Session>;
  updatedAt: Date;
  username: string;
};
