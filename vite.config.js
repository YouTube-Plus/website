import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base: './',
	root: 'src',
	build: {
		publicDir: 'public',
		outDir: '../dist',
		rollupOptions: {
		  input: {
			index: resolve(__dirname, 'src/index.html'),
		  },
		},
	},
	server: {
		open: 'index.html'
	}
})