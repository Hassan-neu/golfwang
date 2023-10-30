export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const code = searchParams.get("code");
        const price = searchParams.get("price");
        if (code) {
            if (price < 1000) {
                return new Response(
                    JSON.stringify({
                        error: "total purchase must be at least 1000",
                    }),
                    { status: 400 }
                );
            }
            const res = await fetch("http://localhost:8000/vouchers/" + code);
            const data = await res.json();
            if (res.ok) {
                return new Response(JSON.stringify(data), { status: 200 });
            } else {
                return new Response(
                    JSON.stringify({ error: "invalid coupon code" }),
                    { status: 400 }
                );
            }
        } else {
            return new Response(
                JSON.stringify({ error: "provide a coupon code" }),
                { status: 404 }
            );
        }
    } catch (err) {
        return new Response(JSON.stringify({ error: "error" }), {
            status: 405,
        });
    }
}
