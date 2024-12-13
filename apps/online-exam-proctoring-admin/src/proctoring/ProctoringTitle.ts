import { Proctoring as TProctoring } from "../api/proctoring/Proctoring";

export const PROCTORING_TITLE_FIELD = "id";

export const ProctoringTitle = (record: TProctoring): string => {
  return record.id?.toString() || String(record.id);
};
