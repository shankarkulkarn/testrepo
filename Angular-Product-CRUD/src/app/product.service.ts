import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url : string = "http://localhost:9090/product";

  constructor(private http : HttpClient) { }

  getAllProducts() : Observable<Product []>
  {
      return this.http.get<Product []>(this.url);
  }
  deleteProduct(productId : number ) : Observable<Product>
  {
        return this.http.delete<Product>(this.url+"/"+productId);
  }
  createProduct(product : Product ) : Observable<Product>
  {
      return this.http.post<Product>(this.url,product);
  }

}
