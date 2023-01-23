import { IUser } from "../../entities/user"
import { PrismaClient } from "@prisma/client"

export async function create_user(user: IUser) {
    const prisma = new PrismaClient()

   const res = await prisma.user.create({
    data: user
   })

   return res
}