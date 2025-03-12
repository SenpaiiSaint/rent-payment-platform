import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Rent from "@/models/Rent";

// GET: Retrieve all rent records
export async function GET() {
  await connectDB();

  try {
    const rents = await Rent.find();
    return NextResponse.json(rents);
  } catch (error) {
    console.error("Error fetching rent records:", error);
    return NextResponse.json(
      { error: "Failed to fetch rent records" },
      { status: 500 }
    );
  }
}

// POST: Create a new payment (simulate payment processing)
export async function POST(request: Request) {
  await connectDB();

  try {
    const body = await request.json();

    // ✅ Input validation
    if (!body.tenantName || !body.amount || typeof body.amount !== "number") {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: 400 }
      );
    }

    // ✅ Simulate processing payment logic
    const paymentStatus = "paid";

    const newPayment = new Rent({
      tenantName: body.tenantName,
      amount: body.amount,
      status: paymentStatus,
    });

    await newPayment.save();

    return NextResponse.json(newPayment, { status: 201 });
  } catch (error) {
    console.error("Error creating payment record:", error);
    return NextResponse.json(
      { error: "Failed to create payment record" },
      { status: 500 }
    );
  }
}
