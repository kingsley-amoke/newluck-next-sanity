import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const projectId = process.env.EXPO_PUBLIC_SANITY_PROJECT_ID as string
const dataset = process.env.EXPO_PUBLIC_SANITY_DATASET as string
const apiVersion = process.env.EXPO_PUBLIC_SANITY_API_VERSON as string

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
