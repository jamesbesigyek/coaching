//Java Script Object Literal Notation (JSOLN)
//java Script object notation (JSON)
//path--a package for dynamically creating a path to a directory

//console.log("Hello world..... am back")

//express is a server
const express = require("express")
//creating instance of server
const server = express()


////after the port, you may supply the domain name. this is optional. by default, its 127.0.0.1 which is local host.


server.listen(4000,()=>{console.log("server is listening.......................on port 4000")})




// using body parser

const bodyParser = require("body-parser")
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))


//requiring pug

const path = require("path")
let viewpath = path.join(__dirname,"views") //join concatenates the variables

console.log(__dirname) //logs path up to folder
console.log(__filename) //logs path up to file

//set the engine that is to render the files 
server.set("view engine", "pug")
server.set("views",viewpath)

//connecting to a database

mongoose.connect("mongodb://localhost:27017/refactory",{useNewUrlParser: true})


/*routes - use... 
- get to recieve from the server
- post to send to server
- put to edit to server
- delete from server
*/


server.get("/",(req,res) =>{
    res.send("This is a home page..")

})

server.get("/login",(req,res)=>{
    res.render("login")
})

server.get("/products",(req,res) =>{
    res.send("This is a products page..")

})
server.get("/services",(req,res) =>{
    res.send("This is a services page..")

})
server.get("/about",(req,res) =>{
    res.send("This is an about us page..")

})
server.get("/contacts",(req,res) =>{
    res.send("This is a contacts page..")

})

server.get("/registration",(req,res)=>{
    res.render("form")
})
server.post("/registration",(req,res)=>{ 
    console.log(req.body)}
   
   //res.send(" data submitted. you have been successfully registered")
   // res.render("form") - you may rerender the page for another registration or a different page
)


//plait text
//JSON
//Files{html,images,audios,videos}

