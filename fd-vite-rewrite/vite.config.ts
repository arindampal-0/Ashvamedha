import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@data": path.resolve(__dirname, "./src/data"),
            "@images": path.resolve(__dirname, "./src/assets/images"),
            "@env": path.resolve(__dirname, "./src/env"),
        },
    },
    server: {
        port: 3000,
    },
});
