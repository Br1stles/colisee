import * as express from 'express';
import * as path from 'path';

import { Scheduler } from '../../scheduler/scheduler';

let router = express.Router();

let scheduler =  new Scheduler();

router.post("/start", (req, res )=>{
    scheduler.start((err) => {
        if(err) return res.status(404).send(err);
        res.status(200).send("Started schedule");
    });
});

router.post("/stop",(req,res) =>{
    scheduler.stop((err) => {
        if(err) return res.status(400).send(err);
        res.status(200).send("Stopped schedule");
    });
});

export { router as scheduler };










