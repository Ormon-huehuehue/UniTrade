"use server"

import { PrismaClient } from "@prisma/client";
import { Post } from "@prisma/client";
import { NextResponse } from "next/server";
import axios from "axios";
import prisma from "@/lib/prisma";


export async function POST(request : Request)  {
    try{
        const body = await  request.json()
        const { title, description, price, userId, url }  = body

        console.log(body)
        
          const post = await prisma.post.create({
            data: {
              title,
              description,
              price,
              image: url,
              user: {
                connect: {
                    externalId: userId
                }
            }
            },
            
          });
          NextResponse.json("Post created successfully");
          return NextResponse.json({Post : post})

    }
    catch(error){
      console.log("Post route error", error)
        return NextResponse.json("Error creating post")
    }
}