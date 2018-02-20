import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Observable => wijzigingen aan observable worden gemeld aan subscribers


// Injectable => client moet object niet zelf maken
@Injectable()
export class GeldService {
     getGeld():Observable<any> {
        return this.http.get("https://api.fixer.io/latest");
     }
     
     getWissel(i,u):Observable<any> {
        return this.http.get("https://api.fixer.io/latest?base="+i+"&symbols="+u+"");
     }

     constructor(private http: HttpClient) {}
}