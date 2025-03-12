import { NextResponse } from "next/server";

// Mock User Data
const mockUser = {
  name: "John Doe",
  email: "johndoe@example.com",
  joinedAt: new Date().toISOString(),
};

export async function GET() {
  // Simulate a delay for realism (optional)
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(mockUser);
}
