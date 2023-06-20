import { BadRequestException, Inject, Injectable, forwardRef } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/graphql-schema/Models/User";
import { UserService } from "src/users/users.service";

@Injectable()
export class AuthService {

    constructor(
        @Inject(forwardRef(()=> UserService)) private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string) : Promise<User | null> {
        const user = await this.userService.getUserByEmail(email);
        if(!user) {
            throw new BadRequestException("user with the given email does not exist");
        }
        const isUserValid = user.password == password;
        return isUserValid ? user : null;

    }

    async generateCredentials(user: User) : Promise<{access_token: string}> {
        const payload = { 
            email: user.email,
            sub: user.userId
        }
        const token = this.jwtService.sign(payload);
        return { access_token: token};
    }
}