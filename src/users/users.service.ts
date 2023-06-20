import { Injectable, BadRequestException } from "@nestjs/common";
import { User } from "./graphql-schema/Models/User";
import { CreateUserInput } from "./graphql-schema/dtos/create-user-input";
import { v4 as uuidv4} from 'uuid';
import { UserQuery } from "./graphql-schema/dtos/user-query";
import { UpdateUserInput } from "./graphql-schema/dtos/update-user-input";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class UserService {

    users: User[] = [
        {
            userId: "123",
            email: "hello@hotmail",
            password: "mypass",
            age: 23
        }
    ];

    constructor(private readonly authService: AuthService) {}

    async createUser(userInput: CreateUserInput): Promise<User> {

        const user: User = { userId: uuidv4(), ...userInput}
        this.users.push(user);
        return user;
    }

    async getAllUsers() : Promise<User[]> {

        return this.users;
    }

    async getUserById(userQuery: UserQuery): Promise<User> {

        return this.users.find(user=> user.userId == userQuery.userId);
    }

    async getUserByEmail(email: string) : Promise<User | undefined> {

        return this.users.find(user=> user.email == email);
    }

    async updateUserDetails(updateUserInput: UpdateUserInput) : Promise<User> {
        const user = await this.getUserById({ userId: updateUserInput.userId});
        Object.assign(user, updateUserInput);
        return user;
    }
  
    async logInUser(email: string, password : string): Promise<{access_token: string}> {
        const user = await this.authService.validateUser(email, password);
        if(!user) {
            throw new BadRequestException("user not valid");
        }
        
        return await this.authService.generateCredentials(user);
    }
}