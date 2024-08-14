import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";



export async function GET(request : NextRequest){
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