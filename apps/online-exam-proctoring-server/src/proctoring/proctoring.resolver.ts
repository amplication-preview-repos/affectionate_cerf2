import * as graphql from "@nestjs/graphql";
import { ProctoringResolverBase } from "./base/proctoring.resolver.base";
import { Proctoring } from "./base/Proctoring";
import { ProctoringService } from "./proctoring.service";

@graphql.Resolver(() => Proctoring)
export class ProctoringResolver extends ProctoringResolverBase {
  constructor(protected readonly service: ProctoringService) {
    super(service);
  }
}
