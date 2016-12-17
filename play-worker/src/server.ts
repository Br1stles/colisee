import * as winston from 'winston';
import * as config from 'config';
import * as request from 'request';

const max_playing: number = config['max_playing'];
let num_playing: number = 0;

const head_host = process.env.HEAD_HOST;
const head_port = process.env.HEAD_PORT;
const head_token = process.env.HEAD_TOKEN;

function playGame(match_id, callback) {
    //TODO: Get client's build hash
    //TODO: Check against any local build hashes
    //TODO: If exists, use existing build
    //TODO: If does not exist, download new build
    //TODO: Connect client N clients to same game
    callback( new Error('NOT IMPLEMENTED') );
}

function pollFunc() {
    if(num_playing >= max_playing) return; // already playing max

    //TODO: Request dbapi for play server endpoint
    request({
        method: "GET",
        uri: `http://${head_host}:${head_port}/api/v2/play`,
        json: true
    }, (err, response, body) => {
        if(err) return winston.warn(err);
        if(response.statusCode == 204) return; // nothing to poll
        if(response.statusCode != 200) {
            return winston.warn( `Status code: ${response.statusCode} - Status message: ${response.statusMessage}`);
        }
        let match_id = 0; //TODO: change this
        num_playing += 1;
        playGame(match_id, (err) => {
            num_playing -= 1;
            if(err) winston.warn(err);

            //TODO: Post match results to dbapi play server endpoint
            request({
                method: "POST",
                uri: `http://${head_host}:${head_port}/api/v2/play/${match_id}`,
            }, (err, response, body) => {
                if(err) return winston.warn(err);
            });
        });
    });
}

//TODO: Clone game server
//TODO: Start up game server in docker
let poll_interval = setInterval(pollFunc, config['poll_interval']);






