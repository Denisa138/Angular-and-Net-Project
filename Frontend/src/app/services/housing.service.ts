import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const dataObj =  JSON.parse(JSON.stringify(data));
        const propertiesArray: Array<IProperty> = [];
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
