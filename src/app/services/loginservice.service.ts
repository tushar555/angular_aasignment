import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { map, tap } from 'rxjs/operators';


interface UserList{
  customers:User[];
}

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

   API_URL = 'assets/json';
   arr:UserList;
  constructor(private httpClient: HttpClient) { }


  login(userName) {
    let data;
    return this.httpClient.get<UserList>(`${this.API_URL}/User.json`)
        .pipe(tap((users:UserList)=> {

          const alluserData  = {...users};
          //console.log(alluserData);
          const loggedInUser= alluserData.customers.find( value => value.name === userName);
          //console.log(loggedInUser);
          localStorage.setItem('LoggedInUser' , loggedInUser? JSON.stringify(loggedInUser):null);
          const NewValue=localStorage.getItem('LoggedInUser');
          console.log('hiiii' ,JSON.parse(NewValue));
        }));
}

}
