import { connectToDatabase } from "@/lib/database/mongoose"
import { auth } from "@clerk/nextjs/server";
import User from "@/lib/database/models/user.model"; 

export async function GET() {
    await connectToDatabase(); // pastikan terkoneksi
    const { userId: clerkId } = await auth();
    const user = await User.findOne({ clerkId });
    // return Response.json(user);
    // return Response.json(user._id);
    if(!user){
        return new Response("User not found", { status: 404 });
    }
    return Response.json({ _id: user._id });
}
