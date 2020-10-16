import express from "express";
import winston from "winston";
import { promises as fs } from "fs";
import gradesRouter from "./routes/grades-route.js"
// Metodo para logs
global.gradesFile = "grades.json";
const { combine, timestamp, label, printf } = winston.format;
// const { combine, timestamp, label, printf} = winston.format;

const formatWiston = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`
});

global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)( {filename: "grades-control-api.log"})
    ],
    format: combine(
        label({label: "grades-control-api"}),
        timestamp(),
        formatWiston
    )
});

// Iniciando o servidor
const app = express();
app.use(express.json());
// Busca a rota do outro arquivo
app.use('/grades', gradesRouter)
// Iniciando o servidor
app.listen(3000, async () => {
    try {
        logger.info('API Started')

    } catch (err) {
        logger.error(err)
    }
})

