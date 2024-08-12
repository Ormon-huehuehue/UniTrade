import { PrismaClient } from "@prisma/client";
import { Post } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();


export async function GET(request : Request){
    try{
        const posts = await prisma.post.findMany({
            where:{}
        })

        console.log("Posts :",posts)

        return NextResponse.json(posts)
    }
    catch(error){
        console.log("Post route error", error)
        return NextResponse.json("Error fetching posts")
    }
}