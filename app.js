const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); 


require('dotenv/config');


app.use(express.json());

//Middlewares;
app.use(cors());


//import routes:
const postRoute = require('./routes/postApi');
app.use('/posts', postRoute);

const bookRoute = require('./routes/bookApi');
app.use('/books', bookRoute);

const cartRoute = require('./routes/cartApi');
app.use('/cart', cartRoute);

const itemRoute = require('./routes/itemApi');
app.use('/items', itemRoute);


//connect DB;
mongoose.connect(
    //"mongodb+srv://root:root@cluster0.sfv9l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connect to db")
);


app.get('/', (req, res) => {
    res.send("running");
});

app.listen(8080, () => {
    console.log("http://localhost:8080 listening for requests from...");
})