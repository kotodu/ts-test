export class User {
    private age: number;
    private familyName: string;
    private givenName: string;
    constructor(
        familyName: string,
        givenName: string,
        age:number
    ) {
        this.familyName = familyName;
        this.givenName = givenName;
        this.age = age;
    }
    /**
     * getFullName
     */
    public getFullName() {
        return this.familyName + this.givenName;
    }
}