import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

   observable : Observable<Product []> = null;
   product :  Product = null;
  constructor(private service : ProductService) { }

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
}
