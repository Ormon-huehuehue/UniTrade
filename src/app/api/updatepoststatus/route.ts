import prisma from "@/lib/prisma";

import { NextResponse, NextRequest } from "next/server";

export async function PUT(request : NextRequest){
    try{
        //request body contains postId and sold status
        const {postId, sold} = await request.json();

     
        console.log("Sold Status :", sold)
        console.log("updatestatus api called")


    

        let updateBool = true;
    
        if(Boolean(sold) == true){
            updateBool = false;
        }

        console.log("post status updated to : ", updateBool)

        const updatePost = await prisma.post.update({
            where: {
                id : Number(postId)
            },
            data:{
                sold : updateBool
            }
        })


        return NextResponse.json(updatePost)
    }
    catch(error){
        return NextResponse.json("Error updating the post status")
    }
}