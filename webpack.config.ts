import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env?.mode || 'development';
    const port = env?.port || 3000;
    const apiUrl = env?.apiUrl || 'https://api.kapital.kz';
    const imageApiUrl = env?.imageApiUrl || 'http://static.kapital.kz';

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        apiUrl,
        imageApiUrl,
    });

    return config;
};
