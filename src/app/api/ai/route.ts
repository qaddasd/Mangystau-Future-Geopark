import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Pass to the OnlySq API using the provided API key
        const response = await fetch('http://api.onlysq.ru/ai/v2', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer sq-kv2Q5a0EegA9OvhwanCBDvT4qQL9QfMO',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'claude-haiku-4-5',
                request: {
                    messages: body.messages
                }
            })
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error('API proxy error:', error);
        return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 });
    }
}
