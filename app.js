const express = require("express")
const bodyParser = require("body-parser")
const bodyParserMW = bodyParser.urlencoded({
  extended : true
})
const app = express()
app.listen(3000,()=> console.log('server listen on port 3000'))

//middleware
app.get("/",(req,res) =>{
  res.send('Hello World!')

})

app.post('/read', bodyParserMW,(req, res,next )=> {
  console.log(req.body)
  res.send('done')
});