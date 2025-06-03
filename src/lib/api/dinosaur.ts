import { PUBLIC_RESTASAURUS_URL } from '$env/static/public';

export async function loadMoreDinos(endpoint: string) {
    const fullUrl = `${PUBLIC_RESTASAURUS_URL}${endpoint}`;

    const res = await fetch(fullUrl);
    if (!res.ok) {
        throw new Error(`Gagal fetch: ${res.status}`);
    }

    return await res.json();
}