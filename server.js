import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();
const distPath = path.join(__dirname, 'dist');

// ✅ 1. Serve static assets FIRST
app.use(
    express.static(distPath, {
        setHeaders(res, filePath) {
            if (filePath.endsWith('.js')) {
                res.setHeader('Content-Type', 'application/javascript');
            }
        },
    })
);

// ✅ 2. SPA fallback (ONLY after static)
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
