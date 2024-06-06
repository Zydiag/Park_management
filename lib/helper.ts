import { NextResponse } from "next/server"

const handleError=(errMsg?:string, statusCode?:number):NextResponse=>{
    return NextResponse.json(
      { success:false, error: errMsg || 'Internal Server Error' },
      { status: statusCode||500 }
    );
}
export default handleError;