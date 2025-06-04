
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;
        console.log({ email, password });

        return new Response(
            JSON.stringify({
                success: true,
                message: "Working as expected"
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error: any) {
        const message = error?.type === "CredentialsSignin"
            ? { error: 'Invalid credentials.' }
            : { error: 'Something went wrong.' };

        const status = error?.type === "CredentialsSignin" ? 401 : 500;

        return new Response(
            JSON.stringify(message),
            { status, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
