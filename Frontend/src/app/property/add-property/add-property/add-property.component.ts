import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/iPropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishType: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  locationType: Array<string> = ['East', 'West', 'South', 'North'];

  propertyView: IPropertyBase = {
    Id: null as any,
    Name: '',
    Price: null as any,
    SellRent: null as any,
    PType: null as any,
    FType: null as any,
    BHK: null as any,
    BuiltArea: null as any,
    City: null as any,
    RTM: null as any
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.addPropertyForm);
    console.log(this.addPropertyForm.value.BuiltInfo.SellRent);
  }

  selectTab(tabId: number){
    if(this.formTabs?.tabs[tabId]){
      this.formTabs.tabs[tabId].active = true;
    }
  }
}

