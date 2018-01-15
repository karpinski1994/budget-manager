import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OperationService } from '../services/operation.service';
import { ListItem } from '../models/list-item';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
    
itemDesc: string;
itemVal: number;
    
  constructor(private operationService: OperationService) { }

  ngOnInit() {
    
  }
    
    addIncome(){
      this.operationService.addIcome({name: this.itemDesc,value: this.itemVal, created: new Date() });
      console.log(this.itemDesc);
      console.log(this.itemVal);
      this.itemDesc = '';
      this.itemVal = null;
    
  }
    addOutcome(){
      this.operationService.addOutcome({name: this.itemDesc,value: this.itemVal, created: new Date() });
      console.log(this.itemDesc);
      console.log(this.itemVal);
      this.itemDesc = '';
      this.itemVal = null;
    
    }
}
