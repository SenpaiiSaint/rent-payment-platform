import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Rent from "@/models/Rent";

//GET: Retrieve all rent records
export async function GET() {
    await connectDB();
    try {
        const rents = await Rent.find();
        return NextResponse.json(rents);
    } catch (error) {
        return NextResponse.error();
    }
}

//POST: Create a new payment (simulate payment processing)
export async function POST(request: Request) {
    await connectDB();
    const body = await request.json();
    // Simulate processing payment logic
    const paymentStatus = "paid"; // Dummy Payment Status
    try {
        const newPayment = new Rent({
            tenantName: body.tenantName,
            amount: body.amount,
            status: paymentStatus
        });
        await newPayment.save();
        return NextResponse.json(newPayment, { status: 201 });
    } catch (error) {
        return NextResponse.error();
    }
}