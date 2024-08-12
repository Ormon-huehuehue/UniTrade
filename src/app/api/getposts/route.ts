import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();


export async function GET(request : Request){
    try{
        const unsoldPosts = await prisma.post.findMany({
            where:{
                sold : false
            },
            include : {
                user : true
            }
        })

        console.log("Posts :",unsoldPosts)

        return NextResponse.json(unsoldPosts)
    }
    catch(error){
        console.log("Post route error", error)
        return NextResponse.json("Error fetching posts")
    }
}