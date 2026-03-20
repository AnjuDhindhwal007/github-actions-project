import express from 'express';
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello ANJU ... Welcome to GitHub Actions!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
