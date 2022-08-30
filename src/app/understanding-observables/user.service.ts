import { Subject } from "rxjs";

export class UserService{
    isActivated = new Subject<boolean>();
}