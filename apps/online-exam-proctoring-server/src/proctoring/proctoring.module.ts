import { Module } from "@nestjs/common";
import { ProctoringModuleBase } from "./base/proctoring.module.base";
import { ProctoringService } from "./proctoring.service";
import { ProctoringController } from "./proctoring.controller";
import { ProctoringResolver } from "./proctoring.resolver";

@Module({
  imports: [ProctoringModuleBase],
  controllers: [ProctoringController],
  providers: [ProctoringService, ProctoringResolver],
  exports: [ProctoringService],
})
export class ProctoringModule {}
