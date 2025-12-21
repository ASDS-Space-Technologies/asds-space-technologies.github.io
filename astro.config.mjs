import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const SITE_URL = `https://asds-space-technologies.github.io`;
const BASE = `/`;

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});
