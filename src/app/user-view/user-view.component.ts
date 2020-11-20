import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Order } from '../models/order';
import { UserService } from '../services/user.service';

interface OrderDetails {

  orders : Order[];

}

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

selectedOrder : Order;
  ordersArray : Order[];
  userName : string;
  userLoggedIn : boolean = false;
  constructor(private route : Router,
    private userService : UserService) { }
  ngOnInit(): void {

    const loggedInUser = localStorage.getItem('LoggedInUser') || null;
    this.userName = JSON.parse(loggedInUser).name;
    console.log(loggedInUser);
    if(!loggedInUser){
          console.log('User Not foound');
      }else{
          this.userLoggedIn = true;

         }

         this.getOrders();
  }

getOrders() {

  this.userService.getOrders().pipe( map(
    (orders : any)=> {

      const OrderData = {...orders};
      const userId  = JSON.parse(localStorage.getItem('LoggedInUser')).customerId;
      const orderIds = OrderData.orders.filter( element => element.customerId === userId);
      return orderIds;

    }

  )).subscribe(
    data=> {
      this.ordersArray = data;
      console.log(this.ordersArray);
    }
  );



}

getOrderDetail (orders : Order) {

  this.selectedOrder = orders


}

  onLogout() {

    localStorage.removeItem('LoggedInUser');
    localStorage.clear();

        this.route.navigate(['login']);

  }

  closeCard(isClosed) {
console.log("hellloo" , isClosed);
    if(isClosed) {
     this.selectedOrder = null;
    }
  }

}

