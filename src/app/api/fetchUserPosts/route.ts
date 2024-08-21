import prisma from "@/lib/prisma";
import { NextResponse, NextRequest
 } from "next/server";
 import { Post } from "@prisma/client";

export async function GET(request:  NextRequest){
    try{
        //userId = externalId from Clerk
        const userId = request.headers.get('userId')

        if(!userId){
            return NextResponse.json("PostId not found in headers")
        }

        console.log("UserId : ", userId)
        
        const posts = await prisma.post.findMany({
            where: {
                userId : userId
            },
            include : {
                user : true
            }
        })
        
        
        return NextResponse.json(posts)
    }
    catch(error){
        return NextResponse.json("Error fetching posts")
    }
}