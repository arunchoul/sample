import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ViewEditService {

  constructor(private http : Http) { }

  multipleData(){
    return this.http.get('./assets/data/multipleValues.json')
    .map((response: Response) => response.json())
    .catch((error: Response | any) => error.json());
  }

  updateJsonData(dispalyData){
    return this.http.put('./assets/data/multipleValues.json',dispalyData);
  }

}
