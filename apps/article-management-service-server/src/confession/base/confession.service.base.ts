/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Confession as PrismaConfession } from "@prisma/client";

export class ConfessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ConfessionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.confession.count(args);
  }

  async confessions<T extends Prisma.ConfessionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfessionFindManyArgs>
  ): Promise<PrismaConfession[]> {
    return this.prisma.confession.findMany<Prisma.ConfessionFindManyArgs>(args);
  }
  async confession<T extends Prisma.ConfessionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfessionFindUniqueArgs>
  ): Promise<PrismaConfession | null> {
    return this.prisma.confession.findUnique(args);
  }
  async createConfession<T extends Prisma.ConfessionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfessionCreateArgs>
  ): Promise<PrismaConfession> {
    return this.prisma.confession.create<T>(args);
  }
  async updateConfession<T extends Prisma.ConfessionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfessionUpdateArgs>
  ): Promise<PrismaConfession> {
    return this.prisma.confession.update<T>(args);
  }
  async deleteConfession<T extends Prisma.ConfessionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfessionDeleteArgs>
  ): Promise<PrismaConfession> {
    return this.prisma.confession.delete(args);
  }
}