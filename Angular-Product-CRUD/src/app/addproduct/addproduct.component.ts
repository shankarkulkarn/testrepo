import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product : Product = new Product();
  productId : number = 0;
  constructor(private service : ProductService) { }

  ngOnInit(): void {

  }

  add()
  {
    this.service.createProduct(this.product).subscribe( product => {
      alert('Product Added ');this.productId=product.productId});
  }
}
