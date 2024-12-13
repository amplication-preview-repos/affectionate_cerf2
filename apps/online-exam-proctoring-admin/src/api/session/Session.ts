import { Proctoring } from "../proctoring/Proctoring";
import { User } from "../user/User";

export type Session = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  proctorings?: Array<Proctoring>;
  startTime: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
