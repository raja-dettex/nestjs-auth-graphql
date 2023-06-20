import {ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class UserQuery {

    @Field(()=> String)
    userId: string;
}