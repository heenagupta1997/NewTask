import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-second-column',
  templateUrl: './second-column.component.html',
  styleUrls: ['./second-column.component.css']
})
export class SecondColumnComponent implements OnInit {
  apiData: any;
  constructor(private service: TransactionService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((res: any) => {
      this.apiData = res;
    })
  }

}
