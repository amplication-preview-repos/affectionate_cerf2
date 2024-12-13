import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProctoringServiceBase } from "./base/proctoring.service.base";

@Injectable()
export class ProctoringService extends ProctoringServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
