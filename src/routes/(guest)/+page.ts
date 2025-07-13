import { loadMoreDinos } from '$lib/api/dinosaur';
import { 
    PUBLIC_GET_ALL_CLADES, 
    PUBLIC_GET_ALL_DIETS,
    PUBLIC_GET_ALL_LOCOMOTIONS } from '$env/static/public';

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function load() {
    const cladesResult = PUBLIC_GET_ALL_CLADES ? await loadMoreDinos(PUBLIC_GET_ALL_CLADES) : null;
    await delay(200); // jeda 200ms
    const dietsResult = PUBLIC_GET_ALL_DIETS ? await loadMoreDinos(PUBLIC_GET_ALL_DIETS) : null;
    await delay(200); // jeda 200ms
    const locomotionsResult = PUBLIC_GET_ALL_LOCOMOTIONS ? await loadMoreDinos(PUBLIC_GET_ALL_LOCOMOTIONS) : null;

    return {
        clades: cladesResult,
        diets: dietsResult,
        locomotions: locomotionsResult,
    };
}
    

