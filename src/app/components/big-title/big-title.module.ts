import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigTitleBlogComponent } from './big-title-blog/big-title-blog.component';



@NgModule({
  declarations: [
    BigTitleBlogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BigTitleBlogComponent
  ],
})
export class BigTitleModule { }
