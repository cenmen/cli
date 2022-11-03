import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { visualizer } from 'rollup-plugin-visualizer';
import { createHtmlPlugin } from 'vite-plugin-html';
import { AUTH_API } from './src/config/env';

// 将纯字符串配置转换类型
const toTransformConfig = config => {
	const isNumberKeys = ['VITE_PORT'];
	return Object.entries(config).reduce((total, cur) => {
		const [key, value] = cur;
		if (value === 'true') return { ...total, [key]: true };
		if (value === 'false') return { ...total, [key]: false };
		if (isNumberKeys.includes(key)) return { ...total, [key]: Number(value) };
		return { ...total, [key]: value };
	}, {});
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());
	const { VITE_APP_TITLE, VITE_REPORT, VITE_PORT, VITE_SOURCE_MAP } = toTransformConfig(env);
	return {
		plugins: [
			vue(),
			eslintPlugin({
				include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
			}),
			createHtmlPlugin({
				inject: {
					data: {
						title: VITE_APP_TITLE,
					},
				},
			}),
			// * 是否生成包预览
			VITE_REPORT && visualizer(),
		],
		resolve: {
			alias: {
				'@': '/src',
			},
		},
		server: {
			cors: true,
			// https: false,
			port: VITE_PORT,
			proxy: {
				[AUTH_API]: {
					target: `http://api.${mode}.com`,
					changeOrigin: true,
					rewrite: path => path.replace(RegExp(`^/${AUTH_API}`), ''),
				},
			},
		},
		build: {
			sourcemap: VITE_SOURCE_MAP,
			minify: 'esbuild',
			rollupOptions: {
				output: {
					chunkFileNames: 'assets/js/[name]-[hash].js',
					entryFileNames: 'assets/js/[name]-[hash].js',
					assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
				},
			},
		},
	};
});
