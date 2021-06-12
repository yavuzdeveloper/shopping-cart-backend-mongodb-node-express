const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); 
//const bodyParser = require('body-parser');

require('dotenv/config');
// app.use(bodyParser.json());


app.use(express.json());

//Middlewares;
app.use(cors());


//import routes:
const postRoute = require('./routes/postApi');
app.use('/posts', postRoute); //'/posts' olduğunda  postRoute çalışacak

const bookRoute = require('./routes/bookApi');
app.use('/books', bookRoute);

const cartRoute = require('./routes/cartApi');
app.use('/cart', cartRoute);

const itemRoute = require('./routes/itemApi');
app.use('/items', itemRoute);





// app.get("/", (req, res) => {
//     res.send("Express'ten merhaba...");
// });




//connect DB;
mongoose.connect(
    //"mongodb+srv://root:root@cluster0.sfv9l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connect to db")
);


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://root:<password>@cluster0.sfv9l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




app.get('/', (req, res) => {
    res.send("running");
});

app.listen(8080, () => {
    console.log("http://localhost:8080 adresinden gelen istekler dinleniyor...");
})