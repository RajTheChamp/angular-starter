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
  isLoaded:boolean;
  constructor(private dataService: DataService) { }

  async ngOnInit() {
    try {
      this.isLoaded = false;
      this.data = await this.dataService.get();
      this.isLoaded = true;
      console.log(this.data)
    } catch (error) {
      console.log(error)
      throw error;
    }

  }


}
