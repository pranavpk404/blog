import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";

export const config = {
  dataset: process.env.NEXT_SANITY_DATASET || "production",
  projectID: process.env.NEXT_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: string) =>
  createImageUrlBuilder(config).image(source);
