const express=require('express');
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config()


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const db = require("./src/models");
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
  });


require("./src/routes/user.routes")(app);
require("./src/routes/movie.routes")(app);
require("./src/routes/favorite.routes")(app);

const port=process.env.PORT
app.get('/', (req,res)=>{

    res.send('Hello World');
});


app.listen(port || 1337,()=>{console.log("server started" , port)});