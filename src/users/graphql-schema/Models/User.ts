import { ObjectType, Field} from '@nestjs/graphql';
@ObjectType()
export class User {

    @Field(()=> String, {description: "id of hte user"})
    userId: string;

    @Field(()=> String, {description: "email of hte user"})
    email: string;

    @Field(()=> String, {description: "password of hte user"})
    password: string;

    @Field(()=> Number, {description: "age of hte user"})
    age: number;

    @Field(()=> Boolean)
    isSubscribed?:boolean;
}