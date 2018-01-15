import { Component, OnInit } from '@angular/core';
import { ListItem } from '../models/list-item';
import { OperationService } from '../services/operation.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  private incomesList: Array<ListItem> = [];
  private outcomesList: Array<ListItem> = [];

  private reducer = (accumulator, currentValue) => accumulator + currentValue;

  private incomeValues;
  private outcomeValues;

  private totalIncome : number;
  private totalOutcome : number;
  private totalBudget : number;
  private percentages : number;

  constructor(private operationService: OperationService) {

    this.operationService.getIncomesListObs().subscribe((incomes: Array<ListItem>) => {
      this.incomesList = incomes;
      this.incomeValues = this.incomesList.map((el) => el.value);
      this.totalIncome = this.incomeValues.reduce(this.reducer);
      this.countTotalBudget();
    }),

    this.operationService.getOutcomesListObs().subscribe((outcomes: Array<ListItem>) => {
      this.outcomesList = outcomes;
      this.outcomeValues = this.outcomesList.map((el) => el.value);
      this.totalOutcome = this.outcomeValues.reduce(this.reducer);
      this.countTotalBudget();
    })
    

  };
  countTotalBudget() {
    return this.totalBudget = this.totalIncome - this.totalOutcome;
  }
  countPercentages() {
    return ((this.totalOutcome/this.totalIncome)*100);
  }
  
  ngOnInit() {
 
  }

}
