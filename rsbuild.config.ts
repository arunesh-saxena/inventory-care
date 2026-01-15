import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
    plugins: [
        pluginReact(),
        pluginSass({
            sassLoaderOptions: {
                sourceMap: true,
            },
        }),
    ],
    html: {
        template: './public/index.html',
    },
    output: {
        distPath: {
            root: 'dist'
        },
        assetPrefix: '/',
    },
    resolve: {
        alias: {
            '@': './src',
        },
    },
});
