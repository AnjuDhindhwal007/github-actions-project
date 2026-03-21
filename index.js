import express from 'express';
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello ANJU ... how are you!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
