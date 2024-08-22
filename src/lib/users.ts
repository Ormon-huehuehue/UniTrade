import { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import Error from "next/error";

const prisma = new PrismaClient();

export interface UserProps{
    name : string, 
    email : string,
    externalId : string,
    phoneNumber : string
}

export interface UserInt{
    user : UserProps
}

export async function createUser(data : User){
    try{
        console.log("Trying to create user")
        const user = await prisma.user.create({data});
        console.log("User created")
        return {user};
    }
    catch(error){
        console.log("Error creating user")
        console.log("Error : ", error)
        return;
    }
}


// export async function createUserTest({user} : UserInt){
//     try{
//         const createdUser = await prisma.user.create((user));
//         return {createdUser};
//     }
//     catch(error){
//         console.log("Error creating user");
//         console.log("Error : ", error)
//     }
// }

// export async function getUserByClerkId({id, clerkId}:{
//     id : string,
//     clerkId? : string
// }){
//     try{
//         if(id! && !clerkId){
//             console.log("id or clerk id missing");
//         }
//         const user = await prisma.user.findUnique({});
//         return {user}; 
//     }
//     catch(error){
//         console.log("Error getting user by email");
//         console.log("Error : ", error)
//     }
// }