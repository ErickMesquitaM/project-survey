import { Schema, model } from 'mongoose';

export interface IUser {
  nick: string;
  email: string;
  pwd: string;
  avatar: string;
  id: string;
}

const userSchema = new Schema<IUser>({
  nick: { type: String, required: true },
  email: { type: String, required: true },
  pwd: { type: String, required: true },
  avatar: { type: String, required: true },
  id: { type: String, required: true },
});

export default model<IUser>('User', userSchema);