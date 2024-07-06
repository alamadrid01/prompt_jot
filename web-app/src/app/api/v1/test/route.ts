import { NextResponse } from "next/server"


export async function GET(request: any){
    const name = await request.nextUrl.searchParams.get("visitor_name");
    const ip = request.headers.get('X-Forwarded-For') || request.headers.get('CF-Connecting-IP') || request.headers.get('Fastly-Client-IP') || request.headers.get('True-Client')

    

    if(!name){
        return NextResponse.json({message: "Please provide a name"}, {status: 400})
    }

    return NextResponse.json({
        client_ip: `${ip}`,
        location: "Lagos, Nigeria",
        greeting: `Hello ${name}! the temperature is 30 degrees Celsius`
    })
}