import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { UserService } from '../services/user.service';

interface Orders {

  orders: Order[];

}

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  userName: string;
  userLoggedIn = false;
  ordersArray: Order[];

  constructor(private route: Router,
              private userService: UserService) { }

  ngOnInit(): void {

    this.getOrders();
    const loggedInUser = localStorage.getItem('LoggedInUser') || null;
    this.userName = JSON.parse(loggedInUser).name;
    console.log(loggedInUser);
    if (!loggedInUser){
          console.log('User Not foound');
      }else{
          this.userLoggedIn = true;

         }


      }


      onLogout() {

        localStorage.removeItem('LoggedInUser');
        localStorage.clear();

        this.route.navigate(['login']);

      }

      getOrders() {

this.userService.getOrders().subscribe( (data: any) => {
  this.ordersArray = data.orders;
  console.log(this.ordersArray);
});


  }

}
