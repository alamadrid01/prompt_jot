import { NextResponse } from "next/server"

export async function GET(request: any){
    const name = await request.nextUrl.searchParams.get("visitor_name");
    if(!name){
        return NextResponse.json({message: "Please provide a name"}, {status: 400})
    }


    const ip = await request.headers.get('X-Forwarded-For') || request.headers.get('CF-Connecting-IP') || request.headers.get('Fastly-Client-IP') || request.headers.get('True-Client')

    try{
        const getData = await fetch(`https://freeipapi.com/api/json/${ip}`)
        const data = await getData.json()
        const city = data.regionName
        const country = data.countryName

        const getWeather = await fetch(`http://api.weatherapi.com/v1/current.json?q=${city}&key=${process.env.WEATHER}`)
        const weather = await getWeather.json()
        const temperature = weather.current.temp_c

        return NextResponse.json({
            client_ip: `${ip}`,
            location:  `You are in ${city}, ${country}`,
            greeting: `Hello ${name}! the temperature is ${temperature} degrees Celsius`,
        }, {status: 200 })

    }catch(err: any){
        new Error(err.message)
    }

    // console.log(city, country, region, latitude, longitude, ip)


}