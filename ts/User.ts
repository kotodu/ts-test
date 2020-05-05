import { Job } from "./Job";

export class User{
    private age: number;
    private familyName: string;
    private givenName: string;
    readonly job: Job;
    constructor(
        familyName: string,
        givenName: string,
        age: number,
        job:Job
    ) {
        this.familyName = familyName;
        this.givenName = givenName;
        this.age = age;
        this.job = job;
    }
    /**
     * getFullName
     */
    public getFullName() : string {
        return this.familyName + this.givenName;
    }
    public getAge(): number{
        return this.age;
    }
}