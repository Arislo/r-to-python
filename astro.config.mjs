// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://pyr.io",
  integrations: [
    starlight({
      title: "Py-R",
      lastUpdated: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
      customCss: ["./src/styles/custom.css"],
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/Arislo" },
      ],
      sidebar: [
        {
          label: "はじめに",
          autogenerate: { directory: "about" },
        },
        {
          label: "分析レポート",
          badge: "new",
          autogenerate: { directory: "analysis" },
        },
        {
          label: "付録",
          autogenerate: { directory: "appendix" },
        },
      ],
    }),
  ],
});
