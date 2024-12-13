import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProctoringService } from "./proctoring.service";
import { ProctoringControllerBase } from "./base/proctoring.controller.base";

@swagger.ApiTags("proctorings")
@common.Controller("proctorings")
export class ProctoringController extends ProctoringControllerBase {
  constructor(protected readonly service: ProctoringService) {
    super(service);
  }
}
