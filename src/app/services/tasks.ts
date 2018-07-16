export class Tasks {
    id: number;
    name: string;
    finished: boolean;
    static fromObject(data: any) {
        return Object.assign(new Tasks(), data);
    }
}
