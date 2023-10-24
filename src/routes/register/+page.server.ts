import type { Actions } from './$types';
import type { Submission } from '$lib/cosmos';
import { createSubmission } from '$lib/cosmos';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const submission: Submission = {
            id: Math.random().toString(36).substring(7),
            name: data.get('name') as string,
            pitch: data.get('pitch') as string,
            submitter: data.get('submitter') as string,
            description: data.get('description') as string,
            isActive: true
        };
        if (!submission.id || !submission.name || !submission.pitch || !submission.submitter || !submission.description) {
            console.log('missing data')
        }
        else {
            console.log(submission)
            createSubmission(submission);
        }
    },
} satisfies Actions;

