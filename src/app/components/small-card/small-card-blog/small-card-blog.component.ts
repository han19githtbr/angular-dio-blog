import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card-blog',
  templateUrl: './small-card-blog.component.html',
  styleUrls: ['./small-card-blog.component.css']
})
export class SmallCardBlogComponent implements OnInit {
  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
