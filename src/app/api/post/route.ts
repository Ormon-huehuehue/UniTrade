"use server"

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req : Request){
    try{
        const {userID}
    }
    catch(error){
        console.log("Error creating user")
        console.log("Error : ", error)
        return;
    }
}