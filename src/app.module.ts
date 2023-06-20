import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig , ApolloDriver} from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule, 
    GraphQLModule.forRoot<ApolloDriverConfig>({driver: ApolloDriver, autoSchemaFile: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
