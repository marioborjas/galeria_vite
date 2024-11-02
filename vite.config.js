import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { galeriaContexto } from "./data/galeria/galeria";
import * as glob from "glob";
import path, { resolve } from "node:path";

const getHtmlEntries = () => {
    return Object.fromEntries(
        glob.sync('./**/*.html', { ignore: ['./dist/**', './node_modules/**'] }).map(file => [
            file.slice(0, file.length - path.extname(file).length),
            resolve(__dirname, file)
        ])
    );
};

export default defineConfig({
    appType: 'mpa',
    base: "/galeria_vite/",
    build: {
        rollupOptions: {
            input: getHtmlEntries()
        }
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'), 
            context: galeriaContexto 
        }),
    ]
});
