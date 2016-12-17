import * as express from 'express';
import * as config from 'config';
import * as bodyParser from 'body-parser';
import * as winston from 'winston';
import * as routers from './routers';

let app = express();

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    next();
});

app.listen(config['port'], () => {
    winston.info(`Listening on port ${config['port']}`);
});
