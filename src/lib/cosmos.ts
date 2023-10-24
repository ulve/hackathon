import { CosmosClient } from "@azure/cosmos";
const endpoint = "https://fo-olov-cosmos-dev.documents.azure.com:443/";
import { env } from '$env/dynamic/private'
let key = env.COSMOS_API_KEY

if (!key) {
  console.log("no cosmos key")
}

const client = new CosmosClient({ endpoint, key });

export interface Submission {
  id: string;
  name: string;
  pitch: string;
  submitter: string;
  description: string;
  isActive: boolean;
}

export const createSubmission = async (submission: Submission) => {
  console.log(submission)
  if (!submission.id || !submission.name || !submission.pitch || !submission.submitter || !submission.description) {
    console.log("not created")
  }
  else {
    const { database } = await client.databases.createIfNotExists({ id: "hackathon" });
    const { container } = await database.containers.createIfNotExists({ id: "submissions" });
    await container.items.create(submission);
    console.log("created")
  }
}

export const getSubmissions = async (): Promise<Submission[]> => {
  console.log("getSubmissions")
  const { database } = await client.databases.createIfNotExists({ id: "hackathon" });
  const { container } = await database.containers.createIfNotExists({ id: "submissions" });
  const { resources } = await container.items
    .query("SELECT * from c WHERE c.isActive = true")
    .fetchAll();
  console.log(resources)
  return resources;
}
