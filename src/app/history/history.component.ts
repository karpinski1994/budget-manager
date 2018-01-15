import { ListItem } from '../models/list-item';
import { Component, OnInit } from '@angular/core';
import { OperationService } from '../services/operation.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  incomesList: Array<ListItem> = [];
  outcomesList: Array<ListItem> = [];

  constructor(private operationService: OperationService) {
      this.operationService.getIncomesListObs().subscribe((incomes: Array<ListItem>) => {
          this.incomesList = incomes;
      }),
      this.operationService.getOutcomesListObs().subscribe((outcomes: Array<ListItem>) => {
        this.outcomesList = outcomes;
    });
  
    }
    ngOnInit() {
    }
    
}


