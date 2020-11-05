import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//Carregar rotas
import { router as accountRoute } from './routes/accounts-route.js'


// Conecta ao banco
(async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:chobits@cluster0.wcspg.mongodb.net/bank?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conectado no banco, gg")
    } catch (error) {
        console.log("Puta merda! Deu erro: " + error)  
    };
})();

const app = express();
app.use(cors())
// Usa o tipo json
app.use(express.json())

//Sobe o servidor
app.listen(3000, () => {
    try {
        console.log("ta funcionando, carai");
    } catch (error) {
        console.log("Deu merda pra subir o servidor: " + error)
    }
})

app.use('/', accountRoute)