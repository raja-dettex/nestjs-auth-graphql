import { InputType, Field} from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

    @Field(()=> String)
    email: string;

    @Field(()=> String)
    password: string;

    @Field(()=> Number)
    age:number;

    @Field(()=> String, { nullable: true})
    isSubsribed?: boolean;
}