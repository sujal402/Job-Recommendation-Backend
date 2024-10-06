const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config');
const userRoutes = require('./Routes/UserRoute');
const jobRoutes = require('./Routes/JobRoute');

const app = express();

connectDB();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next(); 
});

app.use('/api/user', userRoutes);
app.use('/api/job', jobRoutes);


app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
