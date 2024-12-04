import express from "express";
//import ClientesController from "./ClientesController";
const router = express.Router();
import Usuario from "../models/Usuario.js";
import { where } from "sequelize";
import bcrypt from "bcrypt";

router.get("/login", (req,res)=>{
res.render("login",{loggedOut:true, messages: req.flash()})
})
router.get("/logout",(req,res)=>{
    req.session.user = undefined;
    res.redirect("/");
})
router.get("/cadastro", (req,res)=>{
    res.render("cadastro",{loggedOut:true})
})
router.post("/createUser", (req,res)=> {
    const email = req.body.email;
    const password = req.body.password
   Usuario.findOne({where:{email:email}}).then((usuario)=>{
    if(usuario == undefined){
       const salt = bcrypt.genSaltSync(10)
       const hash = bcrypt.hashSync(password, salt)
        Usuario.create({
            email:email,
            password:hash,
        }).then(()=>{
            res.redirect("/login")
        })
    } else {
        req.flash('danger',"Usuário já cadastrado. Faça o login.")
    res.redirect("/cadastro")
    }
   })
   
})
router.post("/authenticate", (req,res)=>{
    const email = req.body.email;
    const password = req.body.password
Usuario.findOne({
    where:{
        email:email,
    }
}).then((usuario)=>{
    if(usuario != undefined){
        const correct = bcrypt.compareSync(password, usuario.password)
        if(correct){
            //autoriza o login se a senha for true
            req.session.usuario = {
                id:usuario.id,
                email:usuario.email
            }
            req.flash('success',"Login efetuado com sucesso!")
        res.redirect("/");
        } else{
            req.flash('danger',"Senha invalida Tente novamente")
        }
        
    } else {
        req.flash('danger',"O usuário não existe")
            
    }
})


})
export default router;