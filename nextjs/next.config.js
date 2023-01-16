/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'game.gtimg.cn',
				port: '',
				pathname: '/images/lol/**',
			},
		],
	},
};

module.exports = nextConfig;
