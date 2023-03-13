import User from "@models/User";

import { FastifyReply, FastifyRequest } from "fastify";
import { HydratedDocument } from 'mongoose';
import { uid } from 'uid'

interface IUser {
  nick: string;
  email: string;
  pwd: string;
  avatar: string;
  id: string;
}

export default async function addUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {

  console.log(request.body)


  // const params: IUser = request.body;

  // const user: HydratedDocument<IUser> = new User({
  //   nick: params?.nick,
  //   email: params?.email,
  //   pwd: params?.pwd,
  //   avatar: params?.avatar,
  //   id: params?.id,
  // });

  // await user.save();
};