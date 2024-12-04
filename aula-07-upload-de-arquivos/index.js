import express from "express"
import multer from "multer";
const app = express();
import connection from "./config/sequelize-config.js";
import Galeria from "./Model/Galeria.js";

connection.authenticate().then(()=>{
    console.log("Conexão realizada com sucesso");
}).catch((error)=>{
    console.log(error)
});

connection.query(`create database if not exists galeria;`).then(()=>{
    console.log("O banco foi criado com sucesso")
}).catch((error)=>{
    console.log(error)
})



app.use(express.static('public'))
app.set('view engine', 'ejs')

const upload = multer({dest: "public/uploads/"})

app.get("/", (req,res)=>{
    Galeria.findAll().then(imagens=>{
        res.render("index", {
            imagens:imagens
        })
    })
})

app.post("/upload",upload.single("file"), (req,res)=>{
const file = req.file.filename;
Galeria.create({
file:file,
})
res.redirect("/");
})
app.listen(8080,(error)=> {
if(error){
    console.log(`Ocorreu um erro ${error}`)
} else {
    console.log(`http://localhost:8080`)
}


})