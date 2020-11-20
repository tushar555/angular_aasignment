import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCardclose  : EventEmitter<boolean> = new EventEmitter();
  @Input() order:Order;
  constructor() { }

  ngOnInit(): void {
   console.log(this.order);
  }

closeDetails() {
console.log("hiii");
this.onCardclose.emit(true);
}

}
