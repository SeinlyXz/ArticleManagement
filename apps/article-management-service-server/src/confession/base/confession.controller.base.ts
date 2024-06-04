/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ConfessionService } from "../confession.service";
import { ConfessionCreateInput } from "./ConfessionCreateInput";
import { Confession } from "./Confession";
import { ConfessionFindManyArgs } from "./ConfessionFindManyArgs";
import { ConfessionWhereUniqueInput } from "./ConfessionWhereUniqueInput";
import { ConfessionUpdateInput } from "./ConfessionUpdateInput";

export class ConfessionControllerBase {
  constructor(protected readonly service: ConfessionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Confession })
  async createConfession(
    @common.Body() data: ConfessionCreateInput
  ): Promise<Confession> {
    return await this.service.createConfession({
      data: data,
      select: {
        content: true,
        createdAt: true,
        faculty: true,
        id: true,
        submittedBy: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Confession] })
  @ApiNestedQuery(ConfessionFindManyArgs)
  async confessions(@common.Req() request: Request): Promise<Confession[]> {
    const args = plainToClass(ConfessionFindManyArgs, request.query);
    return this.service.confessions({
      ...args,
      select: {
        content: true,
        createdAt: true,
        faculty: true,
        id: true,
        submittedBy: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Confession })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async confession(
    @common.Param() params: ConfessionWhereUniqueInput
  ): Promise<Confession | null> {
    const result = await this.service.confession({
      where: params,
      select: {
        content: true,
        createdAt: true,
        faculty: true,
        id: true,
        submittedBy: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Confession })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateConfession(
    @common.Param() params: ConfessionWhereUniqueInput,
    @common.Body() data: ConfessionUpdateInput
  ): Promise<Confession | null> {
    try {
      return await this.service.updateConfession({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          faculty: true,
          id: true,
          submittedBy: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Confession })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteConfession(
    @common.Param() params: ConfessionWhereUniqueInput
  ): Promise<Confession | null> {
    try {
      return await this.service.deleteConfession({
        where: params,
        select: {
          content: true,
          createdAt: true,
          faculty: true,
          id: true,
          submittedBy: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
