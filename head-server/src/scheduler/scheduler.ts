import * as config from 'config';

class Scheduler {

    readonly schedule_period: number = config['schedule_period'];
    readonly max_scheduled: number = config['max_scheduled'];

    // private
    private schedule_id: number = null;
    private interval_ptr = null;

    constructor() {
    }

    start(callback) {
        callback();
    }

    static intervalFunc(self) {
        return;
    }

    /**
     * clears match objects for new tournament.
     */
    stop(callback) {
        callback();
    }

    /**
     * Schedules just (1) match by calling the genNext() to get 2 clients from db and
     * creating a match using those IDs
     * .
     * Logs any errors in the Db log table as a message.
     * @param callback
     */
    scheduleOnce(callback) {
        callback();
    }

}

export { Scheduler };
