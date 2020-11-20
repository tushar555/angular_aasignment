import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  API_URL = 'assets/json';

  ordersArray : Order[];

  getOrders() {

    return this.httpClient.get<Order>(`${this.API_URL}/Order.json`);

  }
}
