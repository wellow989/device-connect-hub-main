import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    port: 5173,
    host: '0.0.0.0',
    strictPort: true,
    open: true,
    cors: true,
    https: {
      maxVersion: 'TLSv1.3',
      minVersion: 'TLSv1.2'
    },
    hmr: {
      host: '192.168.0.107',
      port: 5173,
      protocol: 'wss'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        ws: true
      },
      '/webhook': {
        target: 'https://n8n.mos9h.site',
        changeOrigin: true,
        secure: false,
        ws: true,
        headers: {
          'Connection': 'keep-alive'
        },
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
        rewrite: (path) => path.replace(/^\/webhook/, '')
      }
    },
    watch: {
      usePolling: true
    }
  },
  preview: {
    port: 5173,
    host: '0.0.0.0',
    strictPort: true,
    https: {
      maxVersion: 'TLSv1.3',
      minVersion: 'TLSv1.2'
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@heroicons/react', 'framer-motion'],
          utils: ['axios', 'react-toastify']
        }
      }
    }
  }
}) 