import { Module } from "@nestjs/common";
import { UserResolver } from "./user.resolver";
import { UserService } from "./users.service";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [AuthModule],
    providers: [UserResolver, UserService],
    exports: [UserService]
})
export class UserModule { 

}