import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  dataSource: any = [];
  apiData: any;
  public displayColumns = ["datex", "name", "status", "type", "time", "amount", "action"];
  constructor(private service: TransactionService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((res: any) => {
      console.log(res);
      this.apiData = res;
      this.dataSource = this.apiData?.transactions;
    })
  }

}
