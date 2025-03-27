
import { NextResponse } from "next/server"

export async function POST(request) {

    try {

        const {name,phone,contactPerson,email,address,merchantCode,notes,paymentTerms} = await request.json()

        const addMerchant = {name,phone,contactPerson,email,address,merchantCode,notes,paymentTerms}

        console.log(addMerchant);
        
        return NextResponse.json(addMerchant)
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message:"Failed to add Merchant",
                error,
            }, {status:500})
        
        
    }
    
}