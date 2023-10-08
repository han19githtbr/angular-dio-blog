import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardBlogComponent } from './big-card-blog/big-card-blog.component';

@NgModule({
  declarations: [
    BigCardBlogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BigCardBlogComponent
  ],
})
export class BigCardModule { }
