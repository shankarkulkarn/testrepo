import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title = " First Component ";
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
       this.title=this.route.snapshot.paramMap.get("title");
  }


}
