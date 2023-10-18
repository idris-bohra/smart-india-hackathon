var cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
var cookieparser = require('cookie-parser');
require('dotenv').config();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


app.use(cors({origin : "http://localhost:3000", credentials : true  }));
app.use(bodyparser.json());
app.use(cookieparser());

//ROUTES
const NdearRoutes = require("./Routes/NdearRoutes");
const SchoolRoutes = require("./Routes/SchoolRoutes");
const TeacherRoutes = require("./Routes/TeacherRoutes");
app.use("/", NdearRoutes);
app.use("/", SchoolRoutes);
app.use("/", TeacherRoutes);

//Database Connection
try
{
    mongoose.connect('mongodb+srv://idrisbohra1:9009787253@cluster0.wqdmn.mongodb.net/?retryWrites=true&w=majority').then(() => console.log("Database connected!")).catch(err => console.log(err));
        
}
catch(err)
{
    console.log(err)
}

app.listen(process.env.PORT , ()=>{
    console.log(`Running at ${process.env.PORT }`);
})
