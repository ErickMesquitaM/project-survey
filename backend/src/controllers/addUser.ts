import User from "@models/User";

import { FastifyReply, FastifyRequest } from "fastify";
import { HydratedDocument } from 'mongoose';
import { uid } from 'uid';

interface IUser {
  nick: string;
  email: string;
  pwd: string;
}

export default async function addUser(request: FastifyRequest<{ Body: IUser }>, reply: FastifyReply): Promise<void> {

  const params: IUser = request.body;


  const user: HydratedDocument<IUser> = new User({
    nick: params?.nick,
    email: params?.email,
    pwd: params?.pwd,
    avatar: Math.floor( Math.random() * 10),
    _date: new Date(),
    id: uid(),
  });


  await user.save();

  reply.send('Gravou')
};