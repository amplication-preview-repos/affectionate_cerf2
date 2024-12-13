/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Exam } from "./Exam";
import { ExamCountArgs } from "./ExamCountArgs";
import { ExamFindManyArgs } from "./ExamFindManyArgs";
import { ExamFindUniqueArgs } from "./ExamFindUniqueArgs";
import { CreateExamArgs } from "./CreateExamArgs";
import { UpdateExamArgs } from "./UpdateExamArgs";
import { DeleteExamArgs } from "./DeleteExamArgs";
import { ExamService } from "../exam.service";
@graphql.Resolver(() => Exam)
export class ExamResolverBase {
  constructor(protected readonly service: ExamService) {}

  async _examsMeta(
    @graphql.Args() args: ExamCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Exam])
  async exams(@graphql.Args() args: ExamFindManyArgs): Promise<Exam[]> {
    return this.service.exams(args);
  }

  @graphql.Query(() => Exam, { nullable: true })
  async exam(@graphql.Args() args: ExamFindUniqueArgs): Promise<Exam | null> {
    const result = await this.service.exam(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Exam)
  async createExam(@graphql.Args() args: CreateExamArgs): Promise<Exam> {
    return await this.service.createExam({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Exam)
  async updateExam(@graphql.Args() args: UpdateExamArgs): Promise<Exam | null> {
    try {
      return await this.service.updateExam({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Exam)
  async deleteExam(@graphql.Args() args: DeleteExamArgs): Promise<Exam | null> {
    try {
      return await this.service.deleteExam(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
