import { loadMoreDinos } from '$lib/api/dinosaur';
import { 
    PUBLIC_GET_ALL_DINOSAURS } from '$env/static/public';

export async function load() {
    const allDinosaur = PUBLIC_GET_ALL_DINOSAURS ? await loadMoreDinos(PUBLIC_GET_ALL_DINOSAURS) : null;

    return {
        dinosaurs: allDinosaur
    };
}
    

