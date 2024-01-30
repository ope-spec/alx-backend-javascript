import express from 'express';
import router from './routes/index.js';
import path from 'path';

const app = express();
const PORT = 1245;

app.use((req, res, next) => {
  req.filePath = path.resolve(process.argv[2]);
  next();
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

export default app;
