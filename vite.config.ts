import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
				svgoConfig: {
					plugins: [
						'preset-default',
						'removeTitle',
						'removeDesc',
						'removeDoctype',
						'cleanupIds',
					],
				},
			},
			include: '**/*.svg?react',
		}),
	],
})
