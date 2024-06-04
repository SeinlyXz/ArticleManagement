/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConfessionWhereInput } from "./ConfessionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ConfessionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ConfessionWhereInput,
  })
  @ValidateNested()
  @Type(() => ConfessionWhereInput)
  @IsOptional()
  @Field(() => ConfessionWhereInput, {
    nullable: true,
  })
  every?: ConfessionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConfessionWhereInput,
  })
  @ValidateNested()
  @Type(() => ConfessionWhereInput)
  @IsOptional()
  @Field(() => ConfessionWhereInput, {
    nullable: true,
  })
  some?: ConfessionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConfessionWhereInput,
  })
  @ValidateNested()
  @Type(() => ConfessionWhereInput)
  @IsOptional()
  @Field(() => ConfessionWhereInput, {
    nullable: true,
  })
  none?: ConfessionWhereInput;
}
export { ConfessionListRelationFilter as ConfessionListRelationFilter };
