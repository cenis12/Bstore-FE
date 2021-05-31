import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductModelServer, serverResponse} from "../models/product.model";



@Injectable({
  providedIn: 'root'
})
export class ProductService {



   private url = environment.serverURL;
  constructor(private http: HttpClient,
              private router: Router) { }


  /* Fetch all products from the backend*/
  getAllProducts(limitOfResults=10): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }
  /*GET SINGLE PRODUCT FROM SERVER*/
  getProductById(id: number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.url + '/products'+ id);
  }
  /*GET PRODUCTS FROM CATEGORY*/
    getByCategory(catName: string): Observable<ProductModelServer>  {
      return this.http.get<ProductModelServer> (this.url + 'products/category/'+ catName);
    }
}
