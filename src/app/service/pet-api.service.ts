import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//observable
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PetApiService {

private url: string = 'https://json.link/iwDT893yZt.json';

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPets() :Observable<any>{
    return this.http.get<any>(this.url).pipe(
     tap(res => res)
 
    )
  }

}


