import * as config from 'config';
import * as Docker from 'dockerode';
import * as fs from 'fs';
import * as path from 'path';
import * as cp from 'child_process';

let rootdir = path.join(__dirname, '../');

let docker: Docker = new Docker();

class App {
    private max_playing: number;
    private polling_ms: number;
    private num_playing: number;
    private interval: NodeJS.Timer;

    constructor() {
        this.max_playing = config.get<number>('max_playing');
        this.polling_ms = config.get<number>('polling_ms');

        this.num_playing = 0;

        clearInterval(this.interval);

        try {
            let cmd = `docker build ${path.join(rootdir, 'dockerfiles/server/')} --quiet`;
            let out = cp.execSync(cmd).toString();
            // Remove sha256: and \n
            out = out.replace(/^.*:/, '').replace(/\n$/, '');
        }




        //TODO: start dockerized server

    }

    poll_once() {
        //TODO: request next game
        //TODO: set game's status from 'sending' to 'playing'
        //TODO: check if local client copy already exists
        //TODO: download missing clients' tar files
        //TODO: load clients tars into docker containers
        //TODO:
    }

    start() {
        this.interval = setInterval(()=>{this.poll_once();}, this.polling_ms);
    }

    stop(): void {
        clearInterval(this.interval);
    }

    reset_server() {
        //TODO: stop polling
        //TODO: wait until 0 games are playing
        //TODO: stop and delete game server docker container & docker image
        //TODO: start dockerized server
        //TODO: start polling if was originally started
    }

}

export { App };