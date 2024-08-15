import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id).exec()
    }

    async create(user: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(user)
        return createdUser.save()
    }

    async update(id: string, user: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, user, {new: true}).exec()
    }

    async delete(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id).exec()
    }
}