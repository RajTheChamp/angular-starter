import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  data: any;
  isLoaded: boolean;
  types = ['success', 'info', 'warning', 'danger'];
  stacked: any[] = [];
  employeesdata: any[] = [];

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    try {
      this.isLoaded = false;
      this.data = await this.dataService.get();
      this.employeesdata = this.data.data.filter(emp=>(emp.id<=4));
      this.loadProgessBarData();
      this.isLoaded = true;
      console.log(this.data)
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  loadProgessBarData() {
    for (let i = 0; i < this.types.length + 1; i++) {
      let value = Math.floor(Math.random() * 27 + 3);
      this.stacked.push({
        value,
        type: this.types[i],
        label: value + ' %'
      });
    }
  }


}
