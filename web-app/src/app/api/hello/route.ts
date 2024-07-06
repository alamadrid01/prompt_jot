import { NextResponse } from "next/server";

async function fetchIPDetails(ip: string) {
    const response = await fetch(`https://freeipapi.com/api/json/${ip}`);
    if (response.status !== 200) {
        throw new Error("Failed to fetch IP details");
    }
    return response.json();
}

async function fetchWeather(city: string) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?q=${city}&key=${process.env.WEATHER}`);
    if (response.status !== 200) {
        throw new Error("Failed to fetch weather details");
    }
    return response.json();
}

export async function GET(request: any) {
    const name = request.nextUrl.searchParams.get("visitor_name");

    if (!name) {
        return NextResponse.json({ message: "Please provide a name" }, { status: 400 });
    }

    const ip = request.headers.get('X-Forwarded-For') ||
               request.headers.get('CF-Connecting-IP') ||
               request.headers.get('Fastly-Client-IP') ||
               request.headers.get('True-Client');

    try {
        const ipDetails = await fetchIPDetails(ip);

        const city = ipDetails.regionName || "";
        const country = ipDetails.countryName || "";

        const weatherDetails = await fetchWeather(city);
        const temperature = weatherDetails.current.temp_c || "";

        return NextResponse.json({
            client_ip: ip,
            location: `You are in ${city}, ${country}`,
            greeting: `Hello ${name}! The temperature is ${temperature} degrees Celsius`,
        }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ message: "An error occurred: " + error.message }, { status: 500 });
    }
}
