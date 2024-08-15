import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import {hashSync} from "bcrypt"

@Schema()
export class User extends Document {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string

    @Prop({
        required: true,
        set: (value: string) => hashSync(value, 10)
    })
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User)