import { Pipe, PipeTransform } from "@angular/core";
import { User } from "src/Models/User";

@Pipe({
    name:'Namepipe'
})
export class Namepipe implements PipeTransform{
    transform(users:User[], name:string):User[] {
        var c = users.filter(user => user.username.startsWith(name));
        console.log(c);
        return c;
    }
}

@Pipe({
    name:'Fakepipe'
})
export class Fakepipe implements PipeTransform{
    transform(users:User[], name:string):User[] {
        var c = users.filter(user => user.username.startsWith(name));
        console.log(c);
        return users;
    }
}