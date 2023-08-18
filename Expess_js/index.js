
var exprss=require('express');

app=exprss();

app.get("/",function (req,res) {

    res.send("Hello Express js");
});
app.listen(8000,function () {

    console.log("Server run success")

})
