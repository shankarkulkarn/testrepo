import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {

  productId : number = 0;
  product : Product = new Product();
  constructor(private service : ProductService) { }

  ngOnInit(): void {
  }

  search()
  {
    this.service.searchProduct(this.productId).subscribe(data => this.product=data,
      error => alert(error.error.errorMessage)
      )
  }
}
