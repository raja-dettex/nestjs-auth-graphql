import { Resolver, Args, Query, Mutation } from "@nestjs/graphql";
import { User } from "./graphql-schema/Models/User";
import { UserService } from "./users.service";
import { CreateUserInput } from "./graphql-schema/dtos/create-user-input";
import { UserQuery } from "./graphql-schema/dtos/user-query";
import { UpdateUserInput } from "./graphql-schema/dtos/update-user-input";
import { LoggedInUser } from "./graphql-schema/dtos/Logged-in-user.output";
import { LogInUserInput } from "./graphql-schema/dtos/log-in-user.input";

@Resolver(()=> User)
export class UserResolver {


    constructor(private readonly userService: UserService) {}


    @Query(()=> User, { name: "user", nullable: true})
    async getUserrById(@Args() userQuery: UserQuery) : Promise<User> {
        return await this.userService.getUserById(userQuery);
    }


    @Query(()=> [User], { name: "users", nullable: true})
    async getAllUsers() : Promise<User[]> {
        return await this.userService.getAllUsers();
    }

    

    @Mutation(()=> User)
    async createUser(@Args('createUser') userInput: CreateUserInput) : Promise<User> {
        return await this.userService.createUser(userInput);
    }

    @Mutation(()=> User)
    async updateUser(@Args('updateUser') updateUserInput: UpdateUserInput) : Promise<User> {
        return await this.userService.updateUserDetails(updateUserInput);
    }

    @Mutation(()=> LoggedInUser)
    async login(@Args('userCred') userCred: LogInUserInput): Promise<LoggedInUser> {
        return await this.userService.logInUser(userCred.email, userCred.password);
    }
}