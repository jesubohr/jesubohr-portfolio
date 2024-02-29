import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  site: "https://me.jesubohrdev.com",
  integrations: [tailwind(), robotsTxt()]
})
