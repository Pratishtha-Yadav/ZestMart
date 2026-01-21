import connectDb from "@/lib/db";
import User from "@/models/user.models";
import bcrypt from "bcryptjs";
import{ NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        await connectDb()
        const {name, email, password} = await req.json()
    const existUser = await User.findOne({ email: email });

    if(existUser){
        return NextResponse.json(
            {message : "User already exists"},
            {status: 400}
        )
    }
if (password.length < 6) {
return NextResponse.json(
        {message : "Password must be at least 6 characters long"},
        {status: 400}
    )
}

const hashedpassword = await bcrypt.hash(password, 10)
const user = await User.create({
    name,email,password:hashedpassword
})
return NextResponse.json(
    user,
    {status:200}
)
    } catch (error) {
        return NextResponse.json(
            {message : `rgister error ${error}`},
            {status:500}
        )

    }
}