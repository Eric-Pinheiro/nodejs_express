import connection from "../config/sequelize-config.js";
import { Sequelize } from "sequelize";


const Imagem = connection.define('imagens', {
    file:{
        type: Sequelize.STRING,
        allowNull:false,
    }
})
Imagem.sync({force:false})
export default Imagem