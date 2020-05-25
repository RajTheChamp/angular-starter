import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { FormControl, FormGroup } from '@angular/forms';
import data from '../../../assets/app-config/data.json';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit {

  dynamicFormData: any;
  dynamicFormGroup: FormGroup;
  isLoaded = false;

  constructor(private dataServices: DataService) { }

  ngOnInit() {
    this.loadData();
    this.isLoaded = true;
  }

  async loadData() {
    // this.dynamicFormData = await this.dataServices.getDynamicformData();
    this.dynamicFormData = data;
    const group = {};
    this.dynamicFormData.data.forEach(formData => {
      group[formData.label] = new FormControl('');
    });
    this.dynamicFormGroup = new FormGroup(group);
  }

  onSubmit() {

  }




}
