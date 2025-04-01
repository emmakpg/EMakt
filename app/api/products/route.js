import { NextResponse } from "next/server"

export async function POST(request) {

    try {

        const {title,categoryId,barcode,sku,price,salePrice,slug,imageUrl,description,tags} = await request.json()

        const newProduct = {title,categoryId,barcode,sku,price,salePrice,slug,imageUrl,description,tags}

        console.log(newProduct);
        
        return NextResponse.json(newProduct)
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message:"Failed to add Product",
                error,
            }, {status:500})
        
        
    }
    
}