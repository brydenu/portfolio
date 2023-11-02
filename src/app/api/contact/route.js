import { default as sendGridEmail } from "@/utils/sendGridEmail";

export async function POST(request) {
    const data = await request.json();

    const email = await sendGridEmail(data);
    
    const responseBody = JSON.stringify(email); // Convert the email response to JSON

    return new Response(responseBody, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}