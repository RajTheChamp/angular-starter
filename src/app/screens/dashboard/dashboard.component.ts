import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { throwError } from 'rxjs';
import { dasboardOptions } from '../../shared/utils/constants/dashboard-options';

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
  dashboardoptions: any[] = [];
  stackedValue = [24, 22, 12, 20];

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    try {
      this.isLoaded = false;
      this.data = await this.dataService.get();
      this.dashboardoptions = dasboardOptions;
      this.loadProgessBarData();
      this.isLoaded = true;
      console.log(this.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  loadProgessBarData() {
    for (let i = 0; i < this.types.length; i++) {
      let value = this.stackedValue[i];
      this.stacked.push({
        value,
        type: this.types[i],
        label: value + ' %'
      });
    }
  }


}
