// src/routes/example/+page.ts
export async function load({ fetch }) {
    const res = await fetch('http://localhost:3000/api/v1/dinosaurs');
    const data = await res.json();

    return { data };
}
