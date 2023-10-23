export async function GET(req) {
    try {
        const { param } = new URL(req.url);
        const code = param.get(code);
        const data = await fetch("http://localhost:8000/vouchers");
    } catch (err) {}
    const res = await data.json();
    return new Response(JSON.stringify(res));
}
