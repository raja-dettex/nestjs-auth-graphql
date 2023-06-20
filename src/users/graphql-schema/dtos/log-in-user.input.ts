import { InputType, Field} from '@nestjs/graphql';

@InputType()
export class LogInUserInput {

    @Field(()=> String, { nullable: false})
    email: string;

    @Field(()=> String, { nullable: false})
    password: string;
}