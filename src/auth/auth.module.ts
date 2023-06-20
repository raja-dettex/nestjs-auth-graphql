import { Module, forwardRef } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserService } from "src/users/users.service";
import { UserModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtSecret } from "./constants";



@Module({
    imports: [forwardRef(()=> UserModule),
                JwtModule.register({
                    secret: jwtSecret,
                    signOptions: {expiresIn: '7200s'},
                })],
    providers: [AuthService],
    exports : [AuthService]
})
export class AuthModule {

}