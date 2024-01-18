import webpack from "webpack";
import path from 'path';
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildOptions, BuildPaths, BuildPlatform } from "./config/build/types/types";

interface EnvVariables {
    mode?: BuildMode;
    port?: number;
    analyzer?: boolean;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    }

    const options: BuildOptions = {
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop',
    }

    const config: webpack.Configuration = buildWebpack(options);

    return config;
}