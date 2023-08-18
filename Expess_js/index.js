

//1
// var exprss=require('express');
//
// app=exprss();
//
// app.get("/",function (req,res) {
//
//     res.send("Hello Express js");
// });
// app.listen(8000,function () {
//
//     console.log("Server run success")
//
// })

//2 routing
var exprss=require('express');

app=exprss();

app.get("/",function (req,res) {

    res.send("Home Page");
});


app.post("/About",function (req,res) {

    res.send("About page");
});


app.put("/contact",function (req,res) {

    res.send("Contact Page");
});

app.delete("/terms",function (req,res) {

    res.send("Terms Page");
});


app.listen(8000,function () {

    console.log("Server run success")

})

