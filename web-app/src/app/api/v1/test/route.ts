import { NextResponse } from "next/server"


export async function GET(request: any){
    const name = await request.nextUrl.searchParams.get("visitor_name");
    const city = await request.geo.city
    const country = await request.geo.country
    const region = await request.geo.region
    const latitude = await request.geo.latitude
    const longitude = await request.geo.longitude
    const ip = await request.headers.get('X-Forwarded-For') || request.headers.get('CF-Connecting-IP') || request.headers.get('Fastly-Client-IP') || request.headers.get('True-Client')

    // console.log(city, country, region, latitude, longitude, ip)

    

    if(!name){
        return NextResponse.json({message: "Please provide a name"}, {status: 400})
    }

    return NextResponse.json({
        client_ip: `${ip}`,
        location: "Lagos, Nigeria",
        greeting: `Hello ${name}! the temperature is 30 degrees Celsius`,
        city: `${city}`,
        country: `${country}`,
        region: `${region}`,
        latitude: `${latitude}`,
        longitude: `${longitude}`
    }, {status: 200 })
}