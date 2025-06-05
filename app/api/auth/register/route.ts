import { connectDB } from "@/lib/backend/mongodb";
import User from "@/models/User";

export async function POST(req: Request){
    const { email, name, image, password } = req.json();
    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
    }

}