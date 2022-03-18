import {forwardRef, Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";
import {AuthModule} from "../auth/auth.module";

@Module({
	controllers: [UsersController],
	providers: [UsersService],
	imports: [
		SequelizeModule.forFeature([User]),// Добавить Пост
		forwardRef(() => AuthModule),
	],
	exports: [
		UsersService,
	]
})
export class UsersModule {
}
