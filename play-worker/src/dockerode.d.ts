
declare namespace Dockerode {
    interface Docker {
        listContainers(callback: (err: Error, containers: any[])=>void): any;
        getContainer(id: string): any;
        createContainer(opts: Object, callback: (err: Error, container: any)=>void);
    }

    var Docker: {
        (): void;
    };



}




declare module "dockerode" {
    export = Dockerode.Docker;
}