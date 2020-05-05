import { User } from "./User";
import { Job } from "./Job";
const user = new User("山田", "太郎", 22,(new Job("学生")));
const contentsElement = document.getElementById("contents");
if (!!contentsElement) {
    contentsElement.innerText = "私は" + user.getFullName()+"で年齢は"+user.getAge()+"歳、職業は"+user.job.getType()+"、月収は"+user.job.avgSalary+"です";
}