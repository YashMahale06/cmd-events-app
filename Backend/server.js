const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./Db/Connection");
const cookieParser = require('cookie-parser')
const cors = require('cors');
const path = require("path");
const Router = require('./Router/Routes');
dotenv.config();
connectDB();

const app = express();
app.use(cookieParser());

// const allowedOrigins = ["http://192.168.1.4:5000"]

app.use(express.json());
const _dirname = path.dirname("")
const buildpath = path.join(_dirname,"../frontend/build")
app.use(express.static(buildpath));
app.use(cors({
    "origin":"*",
    credentials: true,
}));

app.use('/',Router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname,buildpath, 'index.html'));
// });
const PORT = process.env.PORT ;

app.listen(PORT,() =>{
    console.log("Server Running on Port 5000")
})
