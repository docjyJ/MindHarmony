import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

import Unocss from "unocss/vite";
import {fileURLToPath} from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), Unocss()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        }
    }
});
