export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const code = searchParams.get("code");
        if (code) {
            const data = await fetch("http://localhost:8000/vouchers/" + code);
            const res = await data.json();
            return new Response(JSON.stringify(res));
        } else {
            const data = await fetch("http://localhost:8000/vouchers");
            const res = await data.json();
            return new Response(JSON.stringify(res));
        }
    } catch (err) {
        return new Response(JSON.stringify({ message: "error" }));
    }
}
