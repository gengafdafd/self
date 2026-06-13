import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.yyyyang.cn",
  base: "/",
  integrations: [sitemap()],
  output: "static",
});
