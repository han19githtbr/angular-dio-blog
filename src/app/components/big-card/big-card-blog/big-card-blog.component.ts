import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card-blog',
  templateUrl: './big-card-blog.component.html',
  styleUrls: ['./big-card-blog.component.css']
})
export class BigCardBlogComponent implements OnInit {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""

  constructor() { }

  ngOnInit(): void {

  }

}
