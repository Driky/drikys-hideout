import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import MarkdownItGitHubAlerts from "markdown-it-github-alerts";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitepress";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));
const themeDir = resolve(currentDir, "theme");

const componentsDir = resolve(themeDir, "**", "components");
const pagesDir = resolve(themeDir, "**", "pages");

const composablesDir = resolve(themeDir, "**", "composables");
const utilsDir = resolve(themeDir, "**", "utils");

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Driky's Hideout",
    description:
        "Welcome to Driky's journey through software devlopment and other knicknacks.",
    srcDir: "src",
    markdown: {
        config(md) {
            md.use(MarkdownItGitHubAlerts);
        },
        theme: "vitesse-black",
        gfmAlerts: true,
        // { light: "vitesse-black", dark: "vitesse-black" },
        lineNumbers: true,
    },
    vite: {
        plugins: [
            AutoImport({
                imports: [
                    "vue",
                    "vitepress",
                    { from: "tailwind-variants", imports: ["tv"] },
                    {
                        from: "lucide-vue-next",
                        imports: ["House", "BookText"],
                    },
                ],
                dirs: [composablesDir, utilsDir],
                dts: resolve(currentDir, "auto-imports.d.ts"),
            }),
            Components({
                dirs: [componentsDir, pagesDir],
                include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
                dts: resolve(currentDir, "components.d.ts"),
            }),
            tailwindcss(),
            {
                name: "watcher",
                configureServer(server) {
                    server.watcher.add(themeDir);
                },
            },
        ],
        resolve: {
            alias: {
                "@": themeDir,
            },
        },
    },
});
