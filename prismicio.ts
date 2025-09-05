import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

export const repositoryName = "antarala"; // ganti sesuai repo kamu

export const createClient = (config: prismic.ClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, config);

  // cukup dipanggil begini (tanpa previewData atau req)
  enableAutoPreviews({ client });

  return client;
};
