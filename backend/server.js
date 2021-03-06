const express = require('express');
const app = express();
const connectDB = require('./config/db');

// connect database
connectDB();

app.get('/', (req, res) => {
  res.send('welcome to easy shop');
});

// middleware

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

// routes
app.use('/api/products', require('./routes/Products'));
app.use('/api/auth', require('./routes/Users'));

app.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`);
});
