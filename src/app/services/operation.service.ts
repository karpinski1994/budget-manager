import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ListItem } from '../models/list-item';

@Injectable()
export class OperationService {
    
    
    
    //income
    private incomesList: Array<ListItem> =[];
    private incomesListObs = new BehaviorSubject<Array<ListItem>>([]); 

    //outcome
    private outcomesList: Array<ListItem> =[];
    private outcomesListObs = new BehaviorSubject<Array<ListItem>>([]);  

private totalIncome : number;
  private totalOutcome : number;
  private totalBudget : number;
  private budgetPercentages : number;


  constructor() { 
    //income
    this.incomesList = [
        { name : 'Wyplata', value : 100, created: new Date() },
        { name : 'Czynsz', value : 100, created: new Date() }
    ];
    this.incomesListObs.next(this.incomesList);
    //outcome
    this.outcomesList = [
        { name : 'Swinka morska', value : 50, created: new Date() },
        { name : 'Samochod', value : 50, created: new Date() }
    ];
    this.outcomesListObs.next(this.outcomesList);
  }



  //icome methods
    addIcome(income: ListItem){
        //only values are required 'cuase sb can be in rush
        if((income.value !== undefined) && ( income.value !== null)){
            this.incomesList.push(income);
            this.incomesListObs.next(this.incomesList);
        }
    }
    getIncomesListObs(): Observable<Array<ListItem>>{
        return this.incomesListObs.asObservable();
    }




    //outcome methods
    addOutcome(outcome: ListItem){
        //only values are required 'cuase sb can be in rush
        if((outcome.value !== undefined) && ( outcome.value !== null)){
            this.outcomesList.push(outcome);
            this.outcomesListObs.next(this.outcomesList);
        }
    }
    getOutcomesListObs(): Observable<Array<ListItem>>{
        return this.outcomesListObs.asObservable();
    }


}
