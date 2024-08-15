import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll() {
        return this.userService.findAll()        
    }

    @Get(":id")
    findById(@Param('id') id: string) {
        return this.userService.findOne(id)
    }

    @Post()
    create(@Body() user:CreateUserDto) {
        return this.userService.create(user)
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() user: UpdateUserDto) {
        return this.userService.update(id, user);
    }

    @Delete(":id")
    delete(@Param("id") id:string) {
        return this.userService.delete(id)
    }
}