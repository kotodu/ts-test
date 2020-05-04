import { User } from "./User";

const user = new User("山田", "太郎", 22);
const contentsElement = document.getElementById("contents");
if (!!contentsElement) {
    contentsElement.innerText = "私は" + user.getFullName();
}