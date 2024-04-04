import mongoose from 'mongoose'
import {UUID} from "mongodb";


const UserSchema = new mongoose.Schema(
    {
        username: {type: String, require: true},
        email: {type: String, require: true},
        authentication: {
            password: {type: String, require: true},
            salt: {type: String, select: false},
            sessionToken: {type: String, select: false}
        },
    }
);

export const UserModel = mongoose.model('User', UserSchema);
export const getUsers = () => UserModel.find();
export const getUsersByEmail = (email: string) => UserModel.findOne({email});
export const getUsersBySessionToken = (sessionToken: string) => UserModel.findOne({
    'authentication.sessionToken': sessionToken
});

export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) => new UserModel(values)
    .save()
    .then((user) => user.toObject());
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({
    _id: id
});