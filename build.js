import { build } from 'vite';
import path from 'path';

// Chama a função de build do Vite programaticamente
build({
    root: path.resolve('./'),
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
}).catch(err => {
    console.error('Build failed:', err);
    process.exit(1);
});