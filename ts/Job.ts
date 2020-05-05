interface JobStatus{
    avgSalary: number;
    getType(): string;
}
type JobType =
| "会社員"
| "自営業"
| "学生"
| "その他";
export class Job implements JobStatus{
    // 読み取りのみ可能に設定できる
    readonly avgSalary: number;
    private jobType: JobType;
    constructor(
        jobType:JobType,
        ...salarys: number[]
    ) {
        this.jobType = jobType;
        if (salarys.length === 0) {
            this.avgSalary = 0;
        } else {
            let sum: number = 0;
            salarys.forEach(salary => {
                sum += salary;
            });
            this.avgSalary = sum / salarys.length;
        }
    }
    public getType(): string{
        return this.jobType.toString();
    }
}