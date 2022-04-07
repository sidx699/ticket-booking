const express = require("express");
const {MongoClient} = require("mongodb");
const bodyParser = require("body-parser");
const client = new MongoClient("mongodb://localhost:27017");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


async function showData(dict)
{
    let returnValue;
    try{
        await client.connect();
        returnValue = await client.db("ticketbookdb").collection("boughttickets").insertOne({_id: 1, dict: dict});
    }catch{
        returnValue = "Error";
    }finally{
        client.close();
    }
    return returnValue;
}


app.get("/boughtticket/:dict", function(req, res){

    showData(req.params.dict).then((data) => {
        //res.send(data);
        console.log("Data Inserted");
    });

});

app.listen(3000, function(req, res){
    console.log("Server running at 3000");
});