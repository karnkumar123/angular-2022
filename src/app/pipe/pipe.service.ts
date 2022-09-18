
export interface Server{
    name: string;
    startDate: Date;
    status: string;
    instance: string;
}
export class PipeService{
    private serverList: Server[] = [
        {name: 'Dev Server', status: 'offline', startDate: new Date(12,1,2020), instance: 'small'},
        {name: 'Test Server', status: 'offline', startDate: new Date(13,2,2021), instance: 'small'},
        {name: 'Production Server', status: 'online', startDate: new Date(14,9,2022), instance: 'medium'},
        {name: 'QA Server', status: 'online', startDate: new Date(14,9,2022), instance: 'large'}
    ];

    getServer(): Server[]{
        return this.serverList;
    }
}