
import { NextResponse } from "next/server"

export async function POST(request) {

    try {

        const {name,slug,description,logoUrl} = await request.json()

        const addStore = {name,slug,description,logoUrl}

        console.log(addStore);
        
        return NextResponse.json(addStore)
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message:"Failed to add Store",
                error,
            }, {status:500})
        
        
    }
    
}