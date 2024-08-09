"use server"

import { NextResponse } from "next/server";



export async function GET(){
    return NextResponse.json("Hello from the server")
    console.log("Hello from the server")
}