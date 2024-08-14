import prisma from "@/lib/prisma";
import { NextResponse, NextRequest
 } from "next/server";

export async function GET(request:  NextRequest){
    try{
        const postId = request.headers.get('postId')

        if(!postId){
            return NextResponse.json("PostId not found in headers")
        }

        console.log("PostId : ", postId)
        
        const post = await prisma.post.findUnique({
            where: {
                id : Number(postId)
            }
        })
        
        
        return NextResponse.json(post)
    }
    catch(error){
        return NextResponse.json("Error fetching posts")
    }
}