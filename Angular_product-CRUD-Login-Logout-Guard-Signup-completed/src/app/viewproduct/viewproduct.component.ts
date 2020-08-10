import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

   observable : Observable<Product []> = null;
   product :  Product = null;
  constructor(private service : ProductService, private route : Router) { }

  ngOnInit(): void {
    this.reload();
  }
  reload()
  {
    this.observable=this.service.getAllProducts();
  }
  deleteProduct(productId : number)
  {
      this.service.deleteProduct(productId).subscribe(data =>
        {alert("Deleted");this.product=data; this.reload()},error => console.log(error));
  }
  updateProduct(product : Product)
  {
    this.route.navigate(['/update',product.productId,product.productName,product.price]);
  }
}
