"use server"

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Post } from "@prisma/client";
import { NextResponse } from "next/server";
import axios from "axios";

const prisma = new PrismaClient();


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
          return NextResponse.json("Post created successfully");

    }
    catch(error){
      console.log("Post route error", error)
        return NextResponse.json("Error creating post")
    }
}