import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClientService: HttpClient) { }

  getData() {
    return this.httpClientService.get(
      environment.apiURL
    );
  }

  getAPIData() {
    return this.httpClientService.get(
      environment.apiURL
    );
  }
}
