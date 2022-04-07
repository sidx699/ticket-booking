const express = require("express");
const {MongoClient} = require("mongodb");
const bodyParser = require("body-parser");
const client = new MongoClient("mongodb://localhost:27017");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


async function showData()
{
    let returnValue;
    try{
        await client.connect();
        returnValue = await client.db("ticketbookdb").collection("user").insertOne({ _id: 5,name:"Himadri Bose",phone:"7892100545",email:"hbose@gmail.com",password:"hbo@9800"});
    }catch{
        returnValue = "Error";
    }finally{
        client.close();
    }
    return returnValue;
}

showData();

// app.get("/api/:name", function(req, res){

//     showData(req.params.name).then((data) => {
//         res.send(data);
//     });

// });

app.listen(3001, function(req, res){
    console.log("Server running at 3000");
});