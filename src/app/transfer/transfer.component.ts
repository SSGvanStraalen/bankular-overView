import { Component, OnInit } from '@angular/core';
import { Transfer } from './transfer';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    transfer: new Transfer();
  }

}
