import express from "express";
import { promises as fs } from "fs";

const router = express.Router();

router.get('/', async (req, res, next) => {
    try { 
        // Lê o arquivo
        const data = JSON.parse(await fs.readFile(global.gradesFile))
        // Retorna o arquivo
        res.send(data);
    }catch(err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        console.log('oie')
        let grade = req.body;
        console.log(grade);
        
        
        const data = JSON.parse(await fs.readFile(global.gradesFile));
        grade = {
            id: data.nextId++,
            student: grade.student,
            subject: grade.subject,
            type: grade.type,
            value: grade.value,
            timestamp: new Date()
        };

        data.grades.push(grade);
        console.log(data);
        await fs.writeFile(global.gradesFile, JSON.stringify(data, null, 2));

        res.send(grade);
    }catch(err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next)=>{
    try {
        let grade = req.body;
        console.log(req.params.id)
        res.send('Its okay')
    } catch (err) {
        next(err);
    }
});

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message });    
});

export default router;