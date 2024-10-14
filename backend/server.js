const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes.js');

const app = express();
const port = 3000;

// Sử dụng CORS và body-parser
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://127.0.0.1:5501']// Chỉ định nguồn mà bạn cho phép
}));
app.use(bodyParser.json());

// Sử dụng routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
