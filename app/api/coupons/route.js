
import { NextResponse } from "next/server"

export async function POST(request) {

    try {

        const {name,description,code,expiryDate} = await request.json()

        const newCoupon = {name,description,code,expiryDate}

        console.log(newCoupon);
        
        return NextResponse.json(newCoupon)
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message:"Failed to create Coupon",
                error,
            }, {status:500})
        
        
    }
    
}