import { NextResponse } from "next/server"

type handleErrortype = (message:string, status:number)=>NextResponse;
export default function handleError<handleErrortype>(message:string, status:number){
  return NextResponse.json({status,name:"GENERAL",message})
}