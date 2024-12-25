import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password,10);
        await connectMongoDB();
        await User.create({ name, email, password:hashedPassword });

        // Basic validation
        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "Please fill all fields" },
                { status: 400 }
            );
        }


        return NextResponse.json({ message: "User registered" }, { status: 201 });
    } catch (error) {
        console.error("Error registering user:", error);
        return NextResponse.json({ message: "Error registering user" }, { status: 500 });
    }
}
