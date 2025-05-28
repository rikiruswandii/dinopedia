// src/routes/example/+page.ts
import { PUBLIC_GET_ALL_DINOSAURS, PUBLIC_RESTASAURUS_URL } from '$env/static/public';

export async function load({ fetch }) {
    const fullUrl = `${PUBLIC_RESTASAURUS_URL}${PUBLIC_GET_ALL_DINOSAURS}`;
    const res = await fetch(fullUrl);
    const data = await res.json();

    return { data };
}
