import { ObjectType, Field} from '@nestjs/graphql';


@ObjectType()
export class LoggedInUser {

    @Field(()=> String)
    access_token: string;
}