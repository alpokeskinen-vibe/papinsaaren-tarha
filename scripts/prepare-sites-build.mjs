import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist";
const serverDir = join(distDir, "server");
const openAiDir = join(distDir, ".openai");
const staticRouteDirs = ["kaikki", "havainto"];

mkdirSync(serverDir, { recursive: true });
mkdirSync(openAiDir, { recursive: true });
copyFileSync(join(".openai", "hosting.json"), join(openAiDir, "hosting.json"));

const indexHtml = readFileSync(join(distDir, "index.html"), "utf8");
const nestedIndexHtml = indexHtml
  .replaceAll('src="./assets/', 'src="../assets/')
  .replaceAll('href="./assets/', 'href="../assets/');

for (const routeDir of staticRouteDirs) {
  mkdirSync(join(distDir, routeDir), { recursive: true });
  writeFileSync(join(distDir, routeDir, "index.html"), nestedIndexHtml);
}

writeFileSync(
  join(serverDir, "index.js"),
  `const assetFallbackPaths = ["/index.html", "index.html"];

async function fetchAsset(env, request) {
  if (!env?.ASSETS?.fetch) {
    return new Response("Static asset binding is missing.", { status: 500 });
  }

  return env.ASSETS.fetch(request);
}

async function fetchIndex(env, request) {
  for (const path of assetFallbackPaths) {
    const indexUrl = new URL(path, request.url);
    const response = await fetchAsset(env, new Request(indexUrl, request));

    if (response.status !== 404) {
      return response;
    }
  }

  return new Response("index.html not found.", { status: 404 });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const response = await fetchAsset(env, request);

    if (response.status !== 404 || url.pathname.includes(".")) {
      return response;
    }

    return fetchIndex(env, request);
  },
};
`,
);
