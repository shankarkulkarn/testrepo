import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  title = " Big Data";
  constructor(private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
     this.title = this.route.snapshot.paramMap.get('title');

  }
 gotofirst()
 {
   this.router.navigate(['/first',this.title]);
 }
}
