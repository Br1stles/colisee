import * as config from 'config';

import { schedule_type } from './schedule_type';

class Scheduler {

    readonly schedule_period: number = config['schedule_period'];
    readonly max_scheduled: number = config['max_scheduled'];

    // private
    private type: schedule_type;
    private schedule_id: number = null;
    private interval_ptr = null;

    constructor() {
        this.type = schedule_type.Random;
    }

    switch_type(type: schedule_type, callback) {
        //TODO: Cannot switch while scheduler is running
        this.type = type;
        callback(new Error('NOT IMPLEMENTED'));
    }

    start(callback) {
        //TODO: Stop any currently running schedule
        //TODO: Create new schedule on dbapi
        //TODO: Set schedule as running on dbapi

        callback(new Error('NOT IMPLEMENTED'));
    }

    static intervalFunc(self) {
        return;
    }

    /**
     * clears match objects for new tournament.
     */
    stop(callback) {
        //TODO: Stop polling interval
        //TODO: Set data json on dbapi
        //TODO: Set result json on dbapi
        //TODO: Set schedule on as stopped on dbapi
        callback(new Error('NOT IMPLEMENTED'));
    }

    /**
     * Schedules just (1) match by calling the genNext() to get 2 clients from db and
     * creating a match using those IDs
     * .
     * Logs any errors in the Db log table as a message.
     * @param callback
     */
    schedule(callback) {
        //TODO: Create an individual match in dbapi
        callback(new Error('NOT IMPLEMENTED'));
    }

}

export { Scheduler };
