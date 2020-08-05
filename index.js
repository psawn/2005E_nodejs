const express = require ("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT,function () {
    console.log("Sever is running");
})

app.use(express.static("public"));
app.set("view engine","ejs");
var counter = 0;
app.get("/",function (req,res) {
    //res.sendFile(__dirname+"/views/answer_assignment13.html");
    let title ="Du bao thoi tiet";
    counter++;
    res.render("answer_assignment13",{
        title:title,
        counter:counter,
    });
});

app.get("/login",function (req,res) {
    res.send("Day la trang login");
});
const fs = require("fs");
app.get("/danh-muc",function (req,res) {
    let a = fs.readFileSync("data/data.json","UTF-8");
    a = JSON.parse(a);
    res.render("fpt_shop",{
        a:a
    });
});

app.get("/assignment15",function (req,res) {
    let items = fs.readFileSync("data/data15.json","UTF-8");
    items = JSON.parse(items);
    res.render("assignment15",{
        items:items
    });
});

app.get("/chi-tiet/:id",function (req,res) {
    let a = fs.readFileSync("data/data.json","UTF-8");
    let ID =req.params.id;
    a = JSON.parse(a);
    let count =0;
    a.map(e=>{
        count++;
        if (e.id == ID) {
            res.render("chitiet",{
                a:e
            });
            count=0;
        }
    })
    if (count>=a.length) {
        res.send("Khong tim thay");
    }
    //res.render("chitiet");
})