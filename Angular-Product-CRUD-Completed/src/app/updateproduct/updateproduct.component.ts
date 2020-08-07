import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  product : Product = new Product();
  constructor(private route : ActivatedRoute,private service : ProductService,private router : Router) {

   }

  ngOnInit(): void {
  this.product.productId=Number(this.route.snapshot.paramMap.get("pid"));
  this.product.productName=this.route.snapshot.paramMap.get("pname");
  this.product.price=Number(this.route.snapshot.paramMap.get("price"));
}

update()
{
   this.service.updateProduct(this.product).subscribe(data =>
    { alert('updated');this.product=data } );
    this.router.navigate(['/view']);

}

}
