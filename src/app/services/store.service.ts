import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bundle} from "../store/models/bundle";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl: string = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient) { }

  getAllBundles(): Observable<Bundle[]> {
    return this.http.get<Bundle[]>(`${this.baseUrl}/bundles`);
  }
}
