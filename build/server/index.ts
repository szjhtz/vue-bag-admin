export function configServer() {
    return {
        host: '0.0.0.0',
        port: 8290,
        https: false,
        proxy: {
            '^/api': {
                target: 'http://127.0.0.1:8001',
                changeOrigin: true,
                rewrite: (path: any) => path.replace(/^\/api/, '')
            },
            '^/vip': {
                target: 'https://www.vipbic.com/api/api',
                changeOrigin: true,
                rewrite: (path: any) => path.replace(/^\/vip/, '')
            }
        }
    }
}
