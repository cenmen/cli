import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteCompression from 'vite-plugin-compression';
import eslintPlugin from 'vite-plugin-eslint';

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

// @see: https://vitejs.dev/config/
export default defineConfig(config => {
	const env = loadEnv(config.mode, process.cwd());
	const viteEnv = toTransformConfig(env);
	console.log('==> [viteEnv]', viteEnv);

	return {
		// base: "/",
		resolve: {
			alias: {
				'@': resolve(__dirname, './src')
			}
		},
		css: {
			preprocessorOptions: {
				modules: {
					// css模块化 文件以.module.[css|less|scss]结尾
					generateScopedName: '[name]__[local]___[hash:base64:5]'
				},
				less: {
					javascriptEnabled: true,
					additionalData: `@import "@/styles/var.less";`
				}
			}
		},
		// server config
		server: {
			host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
			// https: false,
			// 代理跨域（mock 不需要配置，这里只是个事列）
			proxy: {
				'/weather': {
					target: 'https://weather.cma.cn',
					changeOrigin: true,
					rewrite: path => path.replace(/^\/weather/, '')
				}
			}
		},
		// plugins
		plugins: [
			react(),
			createHtmlPlugin({
				inject: {
					data: {
						title: viteEnv.VITE_GLOB_APP_TITLE
					}
				}
			}),
			// * EsLint 报错信息显示在浏览器界面上
			eslintPlugin(),
			// * 是否生成包预览
			viteEnv.VITE_REPORT && visualizer(),
			// * gzip compress
			viteEnv.VITE_BUILD_GZIP &&
				viteCompression({
					verbose: true,
					disable: false,
					threshold: 10240,
					algorithm: 'gzip',
					ext: '.gz'
				})
		],
		esbuild: {
			pure: viteEnv.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
		},
		// build configure
		build: {
			outDir: 'dist',
			// esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
			minify: 'esbuild',
			// minify: "terser",
			// terserOptions: {
			// 	compress: {
			// 		drop_console: viteEnv.VITE_DROP_CONSOLE,
			// 		drop_debugger: true
			// 	}
			// },
			rollupOptions: {
				output: {
					// Static resource classification and packaging
					chunkFileNames: 'assets/js/[name]-[hash].js',
					entryFileNames: 'assets/js/[name]-[hash].js',
					assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
				}
			}
		}
	};
});
