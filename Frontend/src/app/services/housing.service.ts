import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/iPropertyBase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number): Observable<IPropertyBase[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const dataObj =  JSON.parse(JSON.stringify(data));
        const propertiesArray: Array<IPropertyBase> = [];
        for(var i in dataObj){
          //console.log(dataObj[i]);
          if(dataObj[i].SellRent == SellRent){
            propertiesArray.push(dataObj[i]);
          }
        }
        //console.log(data);
        return propertiesArray;
      })
    );
  }
}
