import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "./src/assets/styles/_mixins.scss" as *;
            @use "./src/assets/styles/_variables.scss" as *;
            @use "./src/assets/styles/_index.scss" as *;
          `,
        },
      },
    },
  },
  server: {
    port: 3000,
  },
});
