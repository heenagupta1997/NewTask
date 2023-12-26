import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  apiData: any;
  constructor(private service: TransactionService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((res: any) => {
      this.apiData = res;
    })
  }

}
