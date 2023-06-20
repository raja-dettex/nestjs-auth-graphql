import { InputType, Field} from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {

    @Field(()=> String)
    userId: string;

    @Field(()=> String, { nullable: true})
    email?: string;

    @Field(()=> String, { nullable: true})
    password?: string;

    @Field(()=> Number, { nullable: true})
    age?:number;

    @Field(()=> String, { nullable: true})
    isSubsribed?: boolean;
}