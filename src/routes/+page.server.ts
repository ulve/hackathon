
import { getSubmissions } from "$lib/cosmos";
import type { Submission } from '$lib/cosmos';

export const load = (() => {
    let submissions = getSubmissions();
    return {
        submissions
    };
})